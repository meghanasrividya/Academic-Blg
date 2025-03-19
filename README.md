# Academic Blog

Welcome to the **Academic Blog** project! This is a web application designed to allow users to create, read, update, and delete academic blog posts. The application is built using JavaScript, Node.js, Express, Sequelize, MySQL, and React.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Wireframes](#wireframes)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Create, edit, and delete blog posts
- View all blog posts
- Responsive design

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/meghanasrividya/Academic-Blg.git
    cd Academic-Blg
    ```

2. **Install dependencies for the backend:**
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up the MySQL database:**
    - Ensure you have MySQL installed and running.
    - Create a database named `academic_blog`.
    - Update the database configuration in `backend/config/config.json` with your MySQL username and password.

5. **Run the migrations:**
    ```bash
    cd ../backend
    npx sequelize-cli db:migrate
    ```

6. **Start the backend server:**
    ```bash
    npm run dev
    ```

7. **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm run dev
    ```

## Usage

Once the installation steps are complete, you can start using the application by navigating to `http://localhost:3000` in your web browser.

## Project Structure

```
Academic-Blg/
├── backend/
│   ├── config/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── Wireframes/
│   ├── Blogs.txt
│   ├── HomePage.txt
│   ├── LoginPage.txt
│   └── Registration.txt
└── README.md
```

## Database Schema

The database schema includes the following tables:

- **Users:**
    - id: INTEGER (Primary Key, Auto Increment)
    - name: STRING
    - email: STRING
    - password: STRING
    - profilePic: STRING
    - createdAt: DATE
    - updatedAt: DATE

## Wireframes

The wireframes for the application are available in the `Wireframes` directory:

- [Registration](./Wireframes/Registration.txt)
- [Login Page](./Wireframes/LoginPage.txt)
- [Home Page](./Wireframes/HomePage.txt)
- [Blogs](./Wireframes/Blogs.txt)

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
