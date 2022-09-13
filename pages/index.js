import { useEffect, useState } from 'react'
import Form from '../components/Form'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getUsers, getMessages } from './api'

export async function getServerSideProps() {
  const users = await getUsers()
  const messages = await getMessages()

  return {
    props: {
      initialUsers: users,
      messages,
    },
  }
}

async function saveUser(user) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(user),
  })
  if (!response.ok) {
    throw new Error('User not saved', response.statusText)
  }

  return await response.json()
}

export default function Home({ initialUsers, messages }) {
  const [users, setUsers] = useState(initialUsers)

  useEffect(() => {
    const fetchUsers = async () => { 
      const response = await getUsers()
      setUsers(response)
    }

    fetchUsers()
  }, [users])
  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   console.log("sending...")

  //   let data = {
  //     name,
  //     email
  //   }
  //   fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json, text/plain, */*",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     console.log("Response received")
  //     if (res.status === 200) {
  //       console.log("Response succeeded!")
  //       setSubmitted(true)
  //       setName("")
  //       setEmail("")
  //     }
  //   })
  // }

  console.log({ users, messages })

  return (
    <div className={styles.container}>
      <Form users={users} setUsers={setUsers} />
    </div>
  )
}
