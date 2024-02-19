# JWT Authentication Microservice

This is a simple JWT (JSON Web Token) authentication microservice built with Node.js and Express.

## Features

- Token-based authentication
- Refresh tokens
- Protected routes

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in the root directory of the project and add the following:

```bash
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
```

### Running the application

To start the main server, run:

```bash
npm run devStart
```

To start the authentication server, run:

```bash
npm run devStartAuth
```

The main server runs on port 3000 and the authentication server runs on port 4000.

### API Endpoints

- POST /login: Authenticate a user and return an access and refresh token.
- POST /token: Generate a new access token using a refresh token.
- DELETE /logout: Invalidate a refresh token.
- GET /posts: Get posts of the authenticated user.

### Built With

- Node.js
- Express
- jsonwebtoken
