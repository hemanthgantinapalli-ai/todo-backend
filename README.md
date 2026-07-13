# 📝 Todo Backend API

A RESTful Todo Backend API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project was developed as part of the **QSkill Backend Development Internship (Slab 1)**.

---

## 🚀 Features

- Create a Todo
- Get All Todos
- Get Todo by ID
- Update Todo
- Delete Todo
- Mark Todo as Completed
- MongoDB Atlas Integration
- REST API Architecture
- MVC Folder Structure

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

## 📁 Project Structure

```
todo-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── todoController.js
│
├── models/
│   └── Todo.js
│
├── routes/
│   └── todoRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/todo-backend.git
```

Go to the project folder

```bash
cd todo-backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=Your_MongoDB_Connection_String
```

Run the project

```bash
npm run dev
```

Server starts on

```
http://localhost:5000
```

---

# 📌 API Endpoints

## Create Todo

**POST**

```
/api/todos
```

Request Body

```json
{
    "title": "Learn Express",
    "description": "Complete Backend Project"
}
```

---

## Get All Todos

**GET**

```
/api/todos
```

---

## Get Todo By ID

**GET**

```
/api/todos/:id
```

---

## Update Todo

**PUT**

```
/api/todos/:id
```

Request Body

```json
{
    "title": "Learn Express JS",
    "description": "Backend Completed"
}
```

---

## Delete Todo

**DELETE**

```
/api/todos/:id
```

---

## Mark Todo as Completed

**PATCH**

```
/api/todos/:id/complete
```

---

# 📷 Sample Response

```json
{
    "success": true,
    "message": "Todo Created Successfully",
    "data": {
        "_id": "...",
        "title": "Learn Node.js",
        "description": "Complete Backend Project",
        "completed": false
    }
}
```

---

# 🧪 Testing

Test the APIs using

- Postman
- Thunder Client
- Insomnia

---

# 👨‍💻 Author

**Hemanth Gantinapalli**

- Full Stack Developer (MERN)
- AI & ML Graduate
- GitHub: https://github.com/hemanthgantinapalli-ai

---

# 📄 License

This project is developed for educational and internship purposes.