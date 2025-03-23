# 🧑‍🎓 Academic Blog Platform

A full-stack, feature-rich **Academic Blog** built with **React**, **Node.js**, **Express**, and **Sequelize**. It allows users to write, edit, and interact with academic content through comments and likes — complete with authentication, user profiles, avatar uploads, dark/light mode, and a stunning UI.

---

## 📸 Screen Shot
![image](https://github.com/user-attachments/assets/5ef10ecf-48e7-4819-86ed-d51fb218cdf8)



---

## 🧰 Tech Stack

| Frontend               | Backend                    | Database |
|------------------------|----------------------------|----------|
| React + Vite           | Node.js + Express.js       | MySQL    |
| React Router + Axios   | Sequelize ORM              | Sequelize CLI |
| Tailwind CSS / Custom  | JWT Authentication         |          |

---

## ✨ Features

- 🔐 JWT Authentication (Login/Register)
- 🔒 Protected Routes (Private User Pages)
- 📝 Create, Edit, Delete Blog Posts
- 💬 Comment on Posts (with Author Info)
- ❤️ Like & Unlike Posts (WIP)
- 👤 User Profiles with Avatar Upload
- 📤 Upload Avatar via Multer
- 🔍 Real-Time Search Functionality
- 🌓 Light / Dark Mode Toggle
- 🖼️ Academic-Themed Background Image
- 💅 Clean & Responsive UI

---

## 📁 Folder Structure
academic-blog/ 
├── client/ │
├── src/ │ │
├── pages/ │ 
│ ├── components/ │ 
│ ├── context/ │ 
│ └── App.jsx │ 
└── vite.config.js 
├── server/ │ 
├── models/ │ 
├── routes/ │ 
├── middleware/ │ 
├── migrations/ │ 
├── seeders/ │
├── config/ │ 
└── server.js
