# TechCrush Tutorial Class - Authentication API with RBAC

A Node.js authentication API with Role-Based Access Control (RBAC), built using Express and Sequelize.

## Features

- User Authentication (Register, Login, Logout)
- Role-Based Access Control (RBAC)
- Password Reset Functionality
- Email Notifications
- Profile Management with Avatar Upload
- Input Validation
- Error Handling
- MySQL Database Integration with Sequelize
- JWT-based Authentication
- Secure Password Hashing
- File Upload Support

## Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm

## Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd <project-directory>
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a MySQL database

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration

5. Start the server:
\`\`\`bash

# Development


npm run dev

# Production

npm start
\`\`\`

## API Endpoints

### Authentication

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password/:token - Reset password
- POST /api/auth/change-password - Change password (protected)

### Profile

- GET /api/profile - Get user profile
- PUT /api/profile - Update user profile
- POST /api/profile/avatar - Upload profile avatar
