# 🔗 Short-Hand URL API

A simple URL shortening API built using **Node.js**, **Express**, **Mongoose**, and **TypeScript**. This project allows you to shorten URLs and track their visit history. It also supports analytics via short URL IDs.

---

## 🚀 Features

- ✅ Generate short URLs for long links
- 📊 Track visit history for analytics
- 🖥️ Simple EJS-based view engine setup for rendering pages
- 📡 Uses MongoDB with **Mongoose** for efficient data management
- 🛡️ Includes error handling middleware for improved stability

---

## 🛠️ Tech Stack

- 🟩 **Node.js**
- ⚡ **Express.js**
- 🍃 **Mongoose**
- 🔷 **TypeScript**
- 🎨 **EJS** for templating

---

## 📥 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd short-hand-url  # Change this if you rename the project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:** Create a `.env` file in the root directory with the following:

```c
PORT=3000
DATABASE_URL=<your-mongodb-connection-url>
```

4.**Start the server:**

   ```bash
   npm run dev
   ```

---

## 📡 API Routes

### **Base URL:** `http://localhost:3000`

| 🔹 Method | 🔸 Endpoint        | 📝 Description                 |
|------------|-------------------|-------------------------------|
| **GET**     | `/`               | 📋 Get all stored URLs         |
| **POST**    | `/`               | ➕ Create a new short URL       |
| **GET**     | `/:shortId`       | 🔍 Get URL details by short ID |

---

## 📄 Example Data Structure

**POST Request Body:**

```json
{
  "redirectUrl": "https://example.com"
}
```

**Response:**

```json
{
  "shortId": "abc123",
  "redirectUrl": "https://example.com",
  "visitHistory": []
}
```

---

## 🗂️ Project Structure

```c
src/
├── controllers/
│   ├── urls/
│   │   ├── analytics-url.ts
│   │   ├── get-url.ts
│   │   ├── post-url.ts
├── models/
│   ├── url.ts
├── routes/
│   ├── router.ts
├── handler/
│   ├── error.handler.ts
├── views/
├── env.config.ts
├── index.ts
```

---

## 🧪 Running Tests

- Use **Postman** or **Thunder Client** to test API endpoints.
- Example:
  - **POST** `/` to create a short URL.
  - **GET** `/:shortId` to access URL details.

---

## 🌟 Future Improvements

- 🚨 Add input validation using **Zod** or **Joi**.
- 📋 Add detailed analytics for URL visits.
- 🔐 Implement user authentication for URL creation.
- 📚 Introduce Swagger documentation for API endpoints.

---

## 🤝 Contributing

1. 🍴 Fork the repository.
2. 🌱 Create a new branch.
3. 🔨 Make your changes.
4. 🔃 Submit a pull request.

---

### 🐙 Connect with Me

📌 GitHub: [Hello-ship-code](https://github.com/Hello-ship-code) 😊🔥

---

## 📜 License

This project is licensed under the **MIT License**.
