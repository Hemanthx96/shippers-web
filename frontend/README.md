# MoveEasy Frontend

Next.js frontend application for MoveEasy shipping services.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

3. Configure environment variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL (http://localhost:5000/api for local)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`: Razorpay key ID (for payments)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Features

- **Marketing Pages**: Home, About, Services, Contact
- **Authentication**: Login, Register
- **Dashboard**: View shipments, create new shipments
- **Shipment Management**: Create, track, and manage shipments
- **Payment Integration**: Razorpay payment gateway
- **Responsive Design**: Works on all devices

## Deployment

Deploy to Vercel (free tier):
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy automatically

Or use:
```bash
npm run build
npm start
```
