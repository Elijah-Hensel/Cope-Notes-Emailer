# Random Email Generator

## Overview
This is a small email generation application. There is a front end that accepts user input for sign up and a node script, that when run, will send emails with a random message from a list of predetermined message objects.

## Software Versions Used
| Tech          |  Version   | Notes                                   |
| :------------ | ---------: | :-------------------------------------- |
| Node.js       |   18.7.17  |
| React         |   18.2.0   |
| Prisma        |   ^4.3.1   |
| Express       |   ^4.18.1  |
| Next          |   12.3.0   |
| MySQL         |   ^2.18.1  |

## Application Setup for Local Development

First install all dependencies:
`npm install`

To test that the application is installed locally and correctly, run:
`npm run dev`

Once this command is run, you can open the application at `localhost:3000`

### Set ENV variables
Create a .env file by running the following in your applications directory:
```bash
touch .env
```
Enter the following environment variables into your new .env file:

```
sender=<email address to be sent from>

HOSTNAME=localhost
SERVER_PORT=<Port your local server is running on>
HOST=http://$HOSTNAME:$SERVER_PORT
```

### Running Prisma
This application is set up to use [Prisma ORM](https://prisma.io/) and a local dev.db file to contain `users` and `messages`
To get the database running in your local environment, as well as to display the Prisma UI in your browser, follow these instructions:

❗️ **For the following steps, open a second terminal**

```bash
npm install prisma --save-dev
npx prisma db push  (db may already be in sync with project)
npm run seed
npx prisma studio
```

Note: `npx prisma studio` will open Prisma's UI dashboard at `localhost:5555`

🚨 3 users and 10 messages will be created

note: you can use the frontend to create more users if you'd like

❗️ **For the following steps, open a third terminal**

### Install NodeMailer
This application unitilizes [nodemailer](https://nodemailer.com/about/) to process the request to send emails in an "easy as cake" way.

```bash
npm install nodemailer
```

### Install MailHog
This application is set up to use [mailhog](https://github.com/mailhog/MailHog) SMTP as it's email transaction manager. 

Install mailhog locally by running:

#### MacOS
`brew update && brew install mailhog`

#### other
```bash
sudo apt-get -y install golang-go
go get github.com/mailhog/MailHog
```

Then:
run `mailhog` to start mail server

mailhog runs on `http://localhost:8025/`

## Running sendMailers script
in a new terminal run `npm run send-mail` and watch the magic happen
