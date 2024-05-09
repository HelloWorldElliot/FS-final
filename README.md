# Keeper - Note-Taking App

Welcome to the GitHub repository for Keeper, a modern note-taking application designed to help users efficiently create, manage, and store their notes online. Built using React, Node/Express, and MongoDB, Keeper combines a clean, user-friendly interface with powerful backend functionality to ensure a seamless note-taking experience.

## Features

- **CRUD Operations**: Users can create, read, and delete notes.
- **Real-Time Sync**: Notes are saved in real-time, ensuring data is never lost.

## Tech Stack

- **Frontend**: Developed using React and deployed with Vercel for optimal performance.
- **Backend**: Node.js with Express framework, ensuring robust server-side operations, deployed on Railway.
- **Database**: MongoDB, providing a flexible, scalable database for storing user data.

## Local Development

Before starting with local development, ensure you have Node.js and MongoDB installed on your machine.

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HelloWorldElliot/FS-final.git
   ```
2. **Implement the dependencies for backend**
   ```bash
   npm install
   ```
3. **Implement the dependencies for frontend**
   ```bash
   cd ui
   npm install
   ```
NOTE: Since the codesandbox of the midterm project didn't use the newest version of nodejs you might need to change the version to older one
   ```bash
   nvm install 16
   nvm use 16
   ```
4. **run backend locally**
   ```bash
   cd ..
   node index.js
   ```
5. **run frontend locally**
   ```bash
   cd ui
   npm start
   ```

