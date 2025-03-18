# User Information API

This is a Node.js API built using **Express**, **Mongoose**, and **TypeScript**. It provides CRUD operations for managing user data and is designed for use with tools like Postman since there is no frontend.

---

## Features
- **Create**, **Read**, **Update**, and **Delete** (CRUD) operations for user data.
- Uses **Mongoose** for MongoDB interactions.
- Built with **TypeScript** for improved type safety and development experience.
- No frontend; intended for API testing via Postman or similar tools.

---

## Tech Stack
- **Node.js**
- **Express.js**
- **Mongoose**
- **TypeScript**

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd user-information-api  # Change this if you rename the project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
Create a `.env` file in the root directory with the following:

```
PORT=3000
DATABASE_URL=<your-mongodb-connection-url>
```

4. **Start the server:**
   ```bash
   npm run dev
   ```

---

## API Routes

### **Base URL:** `http://localhost:3000`

### User Routes
| Method | Endpoint        | Description         |
|---------|----------------|---------------------|
| **GET**    | `/`               | Get all users          |
| **POST**   | `/`               | Create a new user      |
| **GET**    | `/:id`            | Get a user by ID        |
| **PATCH**  | `/:id`            | Update a user by ID     |
| **DELETE** | `/:id`            | Delete a user by ID     |

---

## Example Data Structure

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "gender": "Male",
  "jobTitle": "Software Engineer"
}
```

---

## Project Structure
```
src/
├── controllers/
│   ├── user/
│   │   ├── delete-user.ts
│   │   ├── get-user.ts
│   │   ├── post-user.ts
│   │   ├── update-user.ts
├── models/
│   ├── user.ts
├── routes/
│   ├── router.ts
├── connection.ts
├── env.config.ts
├── index.ts
```

---

## Running Tests
- Use **Postman** or **Thunder Client** to test API endpoints.
- Example:
  - **GET** `/` to retrieve all users.
  - **POST** `/` with JSON body to add a new user.

---

## Future Improvements
- Add input validation using **Zod** or **Joi**.
- Implement proper error handling middleware.
- Add pagination for large data sets.
- Introduce Swagger documentation for API endpoints.

---

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License
This project is licensed under the **MIT License**.

