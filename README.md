# Authentication-hackathon

A full-stack application that users authentication and authorization to grant/limit users permissions to view certain information associated with blog posts (created during the SOC week 10 hackathon day). Users are authenticated using Auth0 and are authorized by checking the existence/status of their email and user type (user or admin) in the database. 

## Skills

Tools and languages:
- React
- JavaScript
- SQL
- CSS
- Node.js
- Express
- Auth0

# App demo

## Authentication with Auth0:
![auth0 authentication](https://user-images.githubusercontent.com/112335053/205508642-f007a643-cf2b-4762-b857-e3a4a9da5cfc.png)

## Non-authorized user:
![getting posts (not authorized)](https://user-images.githubusercontent.com/112335053/205508681-951f9d44-6062-4491-bdc7-e2333a416be3.png)

## Authorized non-user (getting own post):
![getting posts (authorised non-admin)](https://user-images.githubusercontent.com/112335053/205508715-3547c2f6-90d7-459f-983d-301b24f5a142.png)

## Authorized non-user (getting all posts):
![getting all posts (authorised non-admin)](https://user-images.githubusercontent.com/112335053/205508721-e7b6fd3b-5394-4613-a519-bf77d08b7c4b.png)

## Authorized admin (getting all posts) - admin has access to user email information:
![getting all posts (authorised admin)](https://user-images.githubusercontent.com/112335053/205508728-8a6366d7-6933-46c7-87df-f5cccfa79272.png)

# How to clone the repo:

```bash
  git clone https://github.com/Callasaurus/Authentication-hackathon.git
```

# How to run the front end:

```bash
  cd w10_auth-athon-room-24-7-jalla/our-app/1-frontend
```

Install dependencies

```react
  npm install
```

Open React app

```bash
  npm start
```

# How to run the back end:

```bash
  cd w10_auth-athon-room-24-7-jalla/our-app/backend
```

Install dependencies

```react
  npm install
```

Start the server

```bash
  npm run dev
```
