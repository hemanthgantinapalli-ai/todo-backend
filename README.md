# 📝 Todo Backend API

A RESTful Todo Backend API built with **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose**. This project provides complete CRUD operations for managing todos and was developed as part of the **QSkill Backend Development Internship (Slab 1)**.

---

## 🚀 Features

- ✅ Create a Todo
- ✅ Get All Todos
- ✅ Get Todo by ID
- ✅ Update a Todo
- ✅ Delete a Todo
- ✅ Mark Todo as Completed
- ✅ MongoDB Atlas Integration
- ✅ RESTful API
- ✅ MVC Architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv
- CORS
- Nodemon

---

## 📂 Project Structure

```
todo-backend/
│── config/
│   └── db.js
│
│── controllers/
│   └── todoController.js
│
│── models/
│   └── Todo.js
│
│── routes/
│   └── todoRoutes.js
│
│── .env
│── .gitignore
│── package.json
│── package-lock.json
│── server.js
│── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/hemanthgantinapalli-ai/todo-backend.git
```

### Navigate to the project

```bash
cd todo-backend
```

### Install dependencies

```bash
npm install
```

### Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

### Start the server

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/todos` | Create Todo |
| GET | `/api/todos` | Get All Todos |
| GET | `/api/todos/:id` | Get Todo By ID |
| PUT | `/api/todos/:id` | Update Todo |
| DELETE | `/api/todos/:id` | Delete Todo |
| PATCH | `/api/todos/:id/complete` | Mark Todo Completed |

---

## 📤 Sample Request

### POST `/api/todos`

```json
{
  "title": "Learn Express",
  "description": "Complete Todo Backend Project"
}
```

---

## 📥 Sample Response

```json
{
  "success": true,
  "message": "Todo Created Successfully",
  "data": {
    "_id": "687372c0b12f8c52a92f3e0a",
    "title": "Learn Express",
    "description": "Complete Todo Backend Project",
    "completed": false,
    "createdAt": "2026-07-13T09:20:10.000Z",
    "updatedAt": "2026-07-13T09:20:10.000Z"
  }
}
```

---

## 🧪 Testing

You can test the APIs using:

- Postman
- Thunder Client (VS Code)
- Insomnia

---

## 📸 API Demo

| Feature | Endpoint |
|----------|----------|
| Create Todo | POST `/api/todos` |
| Get Todos | GET `/api/todos` |
| Get Todo | GET `/api/todos/:id` |
| Update Todo | PUT `/api/todos/:id` |
| Delete Todo | DELETE `/api/todos/:id` |
| Complete Todo | PATCH `/api/todos/:id/complete` |

---

## 👨‍💻 Author

**Hemanth Gantinapalli**

- 🎓 B.Tech (Artificial Intelligence & Machine Learning)
- 💻 MERN Stack Developer
- 🌐 GitHub: https://github.com/hemanthgantinapalli-ai

---

## 📄 License

This project is developed for learning and internship purposes.

⭐ If you found this project useful, consider giving it a star!