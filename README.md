# 🛍️ North & Co.

<p align="center">
A modern full-stack MERN e-commerce platform focused on performance, scalability, and a clean shopping experience.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux)
![NodeJS](https://img.shields.io/badge/Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-0C63E7?logo=razorpay)

</p>

---

## 📖 About

**North & Co.** is a full-stack MERN e-commerce platform that delivers a complete online shopping experience with secure authentication, product management, Razorpay payments, and a integrated admin dashboard.

It is built using React, Redux Toolkit, Express.js, MongoDB, JWT Authentication, Cloudinary, and Razorpay while following scalable and production-style development practices.

The goal of this project was to understand how large-scale e-commerce applications are structured while following clean architecture and scalable development practices.

---

## 🌐 Live Application

### Customer Website

🔗 https://north-and-co.vercel.app/

### Admin Panel

🔗 https://north-and-co.vercel.app/admin

## 🧪 Demo Credentials

After running the seed command (`npm run seed`), you can log in using the following demo accounts.

| Role        | Email                  | Password |
| ----------- | ---------------------- | -------- |
| 👨‍💼 Admin    | `admin@example.com`    | `123456` |
| 👤 Customer | `customer@example.com` | `123456` |

> **Note:** Running `npm run seed` populates the database with sample products and creates these demo accounts.

---

## ✨ Key Features

- 🔐 JWT Authentication (Access & Refresh Tokens)
- 🍪 Secure HTTP-only Refresh Cookies
- 👥 Separate User & Admin Authentication
- 🔑 Role-Based Authorization
- 🛒 Guest Cart with Automatic Cart Merge
- 💳 Razorpay Online Payments
- 💵 Cash on Delivery (COD)
- 📦 Complete Order Management
- 🔍 Search, Filters, Sorting & Pagination
- ⭐ Featured, New Arrival & Best Seller Products
- ☁️ Cloudinary Image Uploads
- 📊 Admin Dashboard
- 📱 Fully Responsive Design

---

## 🖥️ Tech Stack

| Frontend     | Backend    | Database | Other         |
| ------------ | ---------- | -------- | ------------- |
| React        | Node.js    | MongoDB  | Redux Toolkit |
| React Router | Express.js | Mongoose | JWT           |
| Tailwind CSS | REST API   |          | Axios         |
| Axios        |            |          | Cloudinary    |
| React Icons  |            |          | Razorpay      |
|              |            |          | bcrypt        |

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Arjun-19A/north-and-co.git
cd north-and-co
```

### Backend Setup

Install dependencies

```bash
cd server
npm install
```

Create a `.env` file inside the **server** folder.

```env
PORT=5000
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

### Seed the Database (Recommended)

Populate MongoDB with demo products and demo accounts.

```bash
npm run seed
```

### Start the Backend

```bash
npm run start
```

---

### Frontend Setup (Customer + Admin Panel)

Install dependencies

```bash
cd client
npm install
```

Create a `.env` file inside the **client** folder.

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the application

```bash
npm run dev
```

The application will run at:

### Customer Website

```text
http://localhost:5173
```

### Admin Dashboard

```text
http://localhost:5173/admin
```

---

## 🔒 Authentication

The application uses a secure authentication system built with:

- JWT Access Tokens
- HTTP-only Refresh Token Cookies
- Automatic Token Refresh using Axios Interceptors
- Role-Based Authorization
- Separate User & Admin Authentication
- Secure Cookie-based Session Management

---

## 💳 Payments

Supports both **Cash on Delivery (COD)** and **Razorpay Online Payments** with payment verification, webhook support, retry handling, and payment status tracking.

### Payment Flow

- Create Order
- Secure Razorpay Checkout
- Signature Verification
- Automatic Payment Status Updates
- Retry Failed Payments
- Webhook Support for Payment Confirmation

---

## 🚀 Future Enhancements

- Wishlist
- Product Reviews & Ratings
- Coupons & Discount System
- Order Invoice Generation

---

⭐ If you found this project interesting, consider giving it a star!
```
