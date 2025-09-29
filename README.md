# 🔐 JWT Authentication System

A secure authentication system built with **Node.js, Express, and JWT (JSON Web Tokens)**.  
This project demonstrates how to implement **user login, access tokens, refresh tokens, and logout functionality** in a professional way.

---

## 🚀 Features
- ✅ User login with JWT authentication  
- ✅ Short-lived **Access Tokens**  
- ✅ Long-lived **Refresh Tokens**  
- ✅ Refresh token rotation for security  
- ✅ Logout functionality (removes refresh token)  
- ✅ Protected routes (only accessible with valid access token)  

---

## 🛠️ Tech Stack
- **Node.js** – Backend runtime  
- **Express.js** – Web framework  
- **jsonwebtoken (JWT)** – Authentication  
- **dotenv** – Environment variable management  
- **Postman** – API testing  

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Create a .env File
Create a .env file in the root directory and add:

env
Copy code
ACCESTOKEN=youraccesstokensecret
REFRESHTOKEN=yourrefreshtokensecret
4️⃣ Run the Server
bash
Copy code
node index.js
Server will run on:
👉 http://localhost:3000

📌 API Endpoints
Method	Endpoint	Description
POST	/login	Login user, returns access & refresh tokens
POST	/refreshtoken	Generates new access token using refresh token
DELETE	/logout	Logs out user, invalidates refresh token
GET	/protected	Example protected route (requires access token)

📂 Example Usage
🔑 Login
POST /login

json
Copy code
{
  "name": "anwar",
  "age": "22"
}
✅ Response:

json
Copy code
{
  "accestoken": "eyJhbGciOi...",
  "REFRESHTOKEN": "eyJhbGciOi...",
  "user": {
    "name": "anwar",
    "userage": "22"
  }
}
🔄 Refresh Token
POST /refreshtoken

json
Copy code
{
  "token": "your_refresh_token_here"
}
✅ Response:

json
Copy code
{
  "NEWacesstoken": "eyJhbGciOi..."
}
🚪 Logout
DELETE /logout

json
Copy code
{
  "token": "your_refresh_token_here"
}
✅ Response:

json
Copy code
{
  "message": "looged out succesfully!"
}
🧪 Testing
You can test all endpoints using Postman:

Login → Copy the accestoken

Use accestoken in Authorization → Bearer Token for protected routes

When accestoken expires, use /refreshtoken to get a new one

Logout removes the refresh token (cannot generate new access token anymore)

📜 License
This project is licensed under the MIT License – free to use and modify.

📌 Author

👨‍💻 Developed by Anwar Neja
🌐 Portfolio | GitHub | LinkedIn
