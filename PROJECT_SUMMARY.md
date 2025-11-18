# MoveEasy - Full-Stack Shipping Platform

## 🎯 Project Overview

A complete, production-ready shipping and logistics platform built with modern technologies. Perfect for portfolio demonstration with **100% free hosting**.

---

## ✨ Features Implemented

### Public Features

- ✅ Responsive marketing website
- ✅ Home page with services overview
- ✅ About page with company story
- ✅ Service pages (Express, Warehousing, Part/Full Truckload, Cross Border, COD)
- ✅ Contact page with form
- ✅ Public shipment tracking

### Authenticated Features

- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ User dashboard with statistics
- ✅ Address management (CRUD)
- ✅ Create shipments with full details
- ✅ View all shipments
- ✅ Shipment details page
- ✅ Real-time tracking timeline
- ✅ Payment integration (Razorpay)
- ✅ Shipment cancellation

### Technical Features

- ✅ RESTful API design
- ✅ MongoDB database with Mongoose
- ✅ Password hashing (bcrypt)
- ✅ Input validation
- ✅ Error handling
- ✅ Responsive design (mobile-friendly)
- ✅ SEO-friendly pages

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│   Frontend (Next.js)                │
│   - Marketing Pages                  │
│   - Auth Pages                       │
│   - Dashboard                        │
│   - Shipment Management              │
│   Host: Vercel (Free)                │
└──────────────┬──────────────────────┘
               │
               │ HTTP/REST API
               │
┌──────────────▼──────────────────────┐
│   Backend (Express.js)               │
│   - Authentication                   │
│   - Shipment APIs                    │
│   - Payment APIs                     │
│   - Tracking APIs                    │
│   Host: Render (Free)                │
└──────────────┬──────────────────────┘
               │
               │ MongoDB Driver
               │
┌──────────────▼──────────────────────┐
│   Database (MongoDB)                │
│   - Users                            │
│   - Addresses                        │
│   - Shipments                        │
│   Host: MongoDB Atlas (Free)         │
└─────────────────────────────────────┘
```

---

## 📁 Project Structure

```
shippers-web/
├── frontend/                 # Next.js Application
│   ├── app/
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── login/           # Login page
│   │   ├── register/        # Registration page
│   │   ├── dashboard/      # User dashboard
│   │   ├── shipments/      # Shipment pages
│   │   │   ├── create/     # Create shipment
│   │   │   ├── [id]/        # Shipment details
│   │   │   └── page.tsx     # All shipments
│   │   ├── addresses/      # Address management
│   │   ├── tracking/        # Public tracking
│   │   └── services/        # Service pages
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/                 # Utilities
│       ├── api.ts           # API client
│       └── auth.ts          # Auth helpers
│
├── backend/                  # Express.js API
│   ├── models/              # MongoDB models
│   │   ├── User.js
│   │   ├── Address.js
│   │   └── Shipment.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── addresses.js
│   │   ├── shipments.js
│   │   ├── payments.js
│   │   └── tracking.js
│   ├── middleware/          # Auth middleware
│   └── server.js            # Entry point
│
└── Images/ & svg/           # Static assets
```

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Bootstrap 5** - UI framework
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Razorpay** - Payment gateway
- **bcryptjs** - Password hashing

### Hosting (All Free)

- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Database hosting

---

## 🚀 Getting Started

### Quick Start

1. **Backend Setup:**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm run dev
   ```

2. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   cp .env.local.example .env.local
   # Edit .env.local with API URL
   npm run dev
   ```

3. **Access:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

See `SETUP.md` for detailed instructions.

---

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Addresses

- `GET /api/addresses` - List addresses
- `POST /api/addresses` - Create address
- `PUT /api/addresses/:id` - Update address
- `DELETE /api/addresses/:id` - Delete address

### Shipments

- `POST /api/shipments` - Create shipment
- `GET /api/shipments` - List shipments
- `GET /api/shipments/:id` - Get shipment
- `PUT /api/shipments/:id/cancel` - Cancel shipment

### Payments

- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

### Tracking

- `GET /api/tracking/:trackingNumber` - Track shipment (public)

---

## 💰 Cost Breakdown

| Service       | Plan      | Monthly Cost |
| ------------- | --------- | ------------ |
| Vercel        | Free      | $0           |
| Render        | Free      | $0           |
| MongoDB Atlas | Free M0   | $0           |
| Razorpay      | Test Mode | $0           |
| **Total**     |           | **$0**       |

---

## 🎓 Portfolio Highlights

This project demonstrates:

✅ **Full-Stack Development**

- Frontend (React/Next.js)
- Backend (Node.js/Express)
- Database (MongoDB)

✅ **Modern Practices**

- RESTful API design
- JWT authentication
- Password hashing
- Input validation
- Error handling

✅ **Real-World Features**

- User authentication
- CRUD operations
- Payment integration
- Real-time tracking
- Responsive design

✅ **Production Ready**

- Environment variables
- Error handling
- Security best practices
- Deployment ready

✅ **Free Hosting**

- Zero cost deployment
- Scalable architecture
- Professional presentation

---

## 📝 Next Steps

1. ✅ Setup MongoDB Atlas (free)
2. ✅ Get Razorpay test keys (free)
3. ✅ Deploy backend to Render (free)
4. ✅ Deploy frontend to Vercel (free)
5. ✅ Test all features
6. ✅ Add to portfolio!

---

## 📚 Documentation

- `SETUP.md` - Local development setup
- `DEPLOYMENT.md` - Free hosting deployment
- `README.md` - Project overview
- `backend/README.md` - Backend API docs
- `frontend/README.md` - Frontend docs

---

## 🎉 Success!

You now have a complete, full-stack shipping platform that:

- ✅ Works locally
- ✅ Can be deployed for free
- ✅ Demonstrates professional skills
- ✅ Ready for portfolio

**Total Development Time Saved: Weeks**
**Total Cost: $0/month**

---

Built with ❤️ for portfolio demonstration
