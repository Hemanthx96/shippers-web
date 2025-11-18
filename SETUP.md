# MoveEasy - Setup Guide

Complete setup instructions for running MoveEasy locally.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn
- MongoDB Atlas account (free) OR local MongoDB

---

## 🚀 Quick Start

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Setup Backend Environment

```bash
cd backend
cp .env.example .env
```

Edit `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moveeasy
JWT_SECRET=your-super-secret-jwt-key-change-this
PORT=5000
NODE_ENV=development
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:3000
```

### 3. Start Backend Server

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:5000`

### 4. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 5. Setup Frontend Environment

```bash
cd frontend
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 6. Start Frontend Server

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:3000`

---

## 🗄️ MongoDB Atlas Setup (Free)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create free account
3. Create free M0 cluster
4. Choose region: **Mumbai (ap-south-1)**
5. Create database user
6. Add IP: `0.0.0.0/0` (for development)
7. Get connection string
8. Add to backend `.env`

---

## 💳 Razorpay Setup (Free Test Mode)

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up (free)
3. Go to Settings → API Keys
4. Generate Test Keys
5. Copy Key ID and Key Secret
6. Add to both backend `.env` and frontend `.env.local`

---

## ✅ Test Your Setup

1. Open `http://localhost:3000`
2. Click "Sign Up" to create account
3. Login with your credentials
4. Go to Dashboard
5. Create a shipment
6. Test payment (use Razorpay test cards)

---

## 🐛 Troubleshooting

### Backend won't start

- Check MongoDB connection string
- Verify all environment variables are set
- Check if port 5000 is available

### Frontend can't connect to backend

- Verify backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check browser console for CORS errors

### MongoDB connection errors

- Verify IP whitelist includes your IP
- Check username/password
- Ensure cluster is running

---

## 📚 Next Steps

1. ✅ Local setup complete
2. 📖 Read `DEPLOYMENT.md` for free hosting
3. 🚀 Deploy to Vercel + Render (free)

---

**Happy Coding! 🎉**
