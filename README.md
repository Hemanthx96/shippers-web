# MoveEasy - Full-Stack Shipping Platform

A complete shipping and logistics platform built with Next.js, Express.js, and MongoDB. Perfect for portfolio demonstration with **100% free hosting**.

## 🚀 Tech Stack

### Frontend
- **Next.js 16** (React framework)
- **TypeScript**
- **Bootstrap 5** (UI framework)
- **Axios** (API client)

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** (Authentication)
- **Razorpay** (Payment gateway - test mode)

### Hosting (All Free)
- **Frontend**: Vercel (free tier)
- **Backend**: Render (free tier)
- **Database**: MongoDB Atlas (free tier)

## 📁 Project Structure

```
shippers-web/
├── frontend/          # Next.js application
│   ├── app/          # Pages and routes
│   ├── components/   # React components
│   └── lib/          # Utilities and API client
│
├── backend/          # Express.js API
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   └── middleware/   # Auth middleware
│
└── Images/           # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free)
- Razorpay account (free test keys)

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

Backend runs on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local with your API URL
npm run dev
```

Frontend runs on `http://localhost:3000`

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create free cluster (M0)
3. Get connection string
4. Add to backend `.env` file

### 4. Razorpay Setup

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get test API keys
3. Add to backend `.env` and frontend `.env.local`

## 📝 Features

### Public Pages
- ✅ Home page with services overview
- ✅ About page
- ✅ Services pages (Express, Warehousing, etc.)
- ✅ Contact page
- ✅ Public shipment tracking

### Authenticated Features
- ✅ User registration and login
- ✅ Dashboard with shipment overview
- ✅ Create shipments with address management
- ✅ Track shipments
- ✅ Payment integration (Razorpay)
- ✅ Address management

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy automatically

### Backend (Render)
1. Connect GitHub repository
2. Create new Web Service
3. Set environment variables
4. Deploy

### Database
- MongoDB Atlas is already cloud-hosted
- Just update connection string in production

## 💰 Cost

**Total Monthly Cost: $0**

- Vercel: Free tier (100 GB bandwidth)
- Render: Free tier (750 hours/month)
- MongoDB Atlas: Free tier (512 MB storage)
- Razorpay: Free test mode

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Shipments
- `POST /api/shipments` - Create shipment
- `GET /api/shipments` - Get user shipments
- `GET /api/shipments/:id` - Get shipment details

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

### Tracking
- `GET /api/tracking/:trackingNumber` - Track shipment (public)

## 🎯 Portfolio Highlights

This project demonstrates:
- ✅ Full-stack development (Frontend + Backend)
- ✅ Modern React/Next.js patterns
- ✅ RESTful API design
- ✅ Authentication & Authorization
- ✅ Payment gateway integration
- ✅ Database design (MongoDB)
- ✅ Responsive UI/UX
- ✅ Production deployment

## 📄 License

ISC

## 👤 Author

Your Name - Portfolio Project

