# Chat Application

This is a real-time chat application built with **NestJS**, **Socket.IO**, and **MongoDB**. It supports user authentication, message creation, and retrieval, as well as WebSocket-based real-time communication.

---

## Features

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Real-Time Messaging**: WebSocket-based real-time communication between users.
- **REST API**: Endpoints for creating and retrieving messages.
- **MongoDB Integration**: Data persistence using MongoDB.
- **Swagger Documentation**: API documentation with Swagger.

---

## Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Running instance of MongoDB
- **npm**: v7 or higher

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chat
2: Install dependencies:
    npm install
    
3. Create a .env file in the root directory and configure the following environment variables:<br>
   CHATTING_PORT=PORT  <br>
   CHATTING_DB=MONGODB_CONNECTION_STRING <br>
   CHATTING_JWTSECRET=JWT_SECRET_KEY     <br>


##Folder Structure
   
src/<br>
├── auth/<br>
│   ├── auth.controller.ts<br>
│   ├── auth.service.ts<br>
│   ├── jwt-auth.guard.ts<br>
│   ├── dto/<br>
│   │   ├── login-user.dto.ts<br>
│   │   └── register-user.dto.ts<br>
├── messages/<br>
│   ├── messages.controller.ts<br>
│   ├── messages.service.ts<br>
│   ├── dto/<br>
│   │   └── create-message.dto.ts<br>
├── app.gateway.ts<br>
├── app.module.ts<br>


##Running Tests<br>
Unit Tests:<br>
           npm run test<br>
End-to-End Tests:<br>
            npm run test:e2e<br>



##License <br>
This project is licensed under the MIT License.


   
