# MoveEasy Backend API

Express.js backend API for MoveEasy shipping services.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure environment variables:
- `MONGODB_URI`: MongoDB Atlas connection string (free tier available)
- `JWT_SECRET`: Random string for JWT tokens
- `RAZORPAY_KEY_ID`: Razorpay test key ID
- `RAZORPAY_KEY_SECRET`: Razorpay test key secret

4. Run development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Addresses
- `GET /api/addresses` - Get user addresses (protected)
- `POST /api/addresses` - Create address (protected)
- `PUT /api/addresses/:id` - Update address (protected)
- `DELETE /api/addresses/:id` - Delete address (protected)

### Shipments
- `POST /api/shipments` - Create shipment (protected)
- `GET /api/shipments` - Get user shipments (protected)
- `GET /api/shipments/:id` - Get shipment details (protected)
- `PUT /api/shipments/:id/cancel` - Cancel shipment (protected)

### Payments
- `POST /api/payments/create-order` - Create Razorpay order (protected)
- `POST /api/payments/verify` - Verify payment (protected)

### Tracking
- `GET /api/tracking/:trackingNumber` - Track shipment (public)

## Deployment

Deploy to Render (free tier):
1. Connect GitHub repository
2. Set environment variables
3. Build command: `npm install`
4. Start command: `npm start`

