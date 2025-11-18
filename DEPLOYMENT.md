# Deployment Guide - Free Hosting Setup

This guide will help you deploy MoveEasy to free hosting services.

## 🎯 Free Hosting Stack

- **Frontend**: Vercel (Free)
- **Backend**: Render (Free)
- **Database**: MongoDB Atlas (Free)

## 📋 Prerequisites

1. GitHub account
2. MongoDB Atlas account (free)
3. Razorpay account (for test keys)
4. Vercel account (free)
5. Render account (free)

---

## Step 1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a free cluster (M0 - Shared)
4. Choose region: **Mumbai (ap-south-1)** for India
5. Create database user (username/password)
6. Add IP address: `0.0.0.0/0` (allow all for now)
7. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

**Connection String Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/moveeasy?retryWrites=true&w=majority
```

---

## Step 2: Razorpay Test Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up for free account
3. Go to Settings → API Keys
4. Generate Test Keys
5. Copy **Key ID** and **Key Secret**

---

## Step 3: Backend Deployment (Render)

### 3.1 Prepare Backend

1. Make sure your backend code is in the `backend/` folder
2. Ensure `package.json` has a `start` script

### 3.2 Deploy to Render

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `moveeasy-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/moveeasy?retryWrites=true&w=majority
   JWT_SECRET=your-random-secret-key-here
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   PORT=10000
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend.vercel.app
   ```
7. Click "Create Web Service"
8. Wait for deployment (takes 2-3 minutes)
9. Copy your backend URL (e.g., `https://moveeasy-backend.onrender.com`)

**Note**: Free tier sleeps after 15 min inactivity. First request may be slow.

---

## Step 4: Frontend Deployment (Vercel)

### 4.1 Prepare Frontend

1. Make sure your frontend code is in the `frontend/` folder
2. Create `.env.local` file (or set in Vercel dashboard)

### 4.2 Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Add Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=https://moveeasy-backend.onrender.com/api
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```
7. Click "Deploy"
8. Wait for deployment (takes 1-2 minutes)
9. Your site is live! (e.g., `https://moveeasy.vercel.app`)

---

## Step 5: Update Backend CORS

After frontend is deployed, update backend environment variable:

1. Go to Render dashboard
2. Edit your web service
3. Update `FRONTEND_URL` to your Vercel URL
4. Redeploy

---

## Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test registration/login
3. Create a test shipment
4. Test payment (use Razorpay test cards)
5. Test tracking

---

## 🔧 Troubleshooting

### Backend not responding
- Check Render logs
- Verify environment variables
- Check MongoDB connection
- Free tier sleeps - first request may take 30-60 seconds

### Frontend can't connect to backend
- Check `NEXT_PUBLIC_API_URL` in Vercel
- Verify CORS settings in backend
- Check backend URL is correct

### MongoDB connection errors
- Verify IP whitelist includes `0.0.0.0/0`
- Check username/password in connection string
- Ensure cluster is running

### Payment not working
- Verify Razorpay keys are correct
- Check if using test keys in test mode
- Check browser console for errors

---

## 📊 Free Tier Limits

### Vercel
- ✅ 100 GB bandwidth/month
- ✅ Unlimited requests
- ✅ Automatic deployments
- ✅ Free SSL

### Render
- ✅ 750 hours/month (enough for 24/7)
- ⚠️ Sleeps after 15 min inactivity
- ✅ Free SSL
- ✅ Custom domains

### MongoDB Atlas
- ✅ 512 MB storage
- ✅ Shared cluster
- ✅ Free forever

---

## 🚀 Going Live Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set
- [ ] CORS configured
- [ ] Test registration
- [ ] Test shipment creation
- [ ] Test payment flow
- [ ] Test tracking

---

## 💡 Pro Tips

1. **Custom Domain**: Add your domain to Vercel (free SSL included)
2. **Monitoring**: Use Render logs for backend debugging
3. **Backups**: MongoDB Atlas has automatic backups
4. **Performance**: Consider upgrading to paid tiers if you get traffic

---

## 📞 Support

If you encounter issues:
1. Check Render logs (backend)
2. Check Vercel logs (frontend)
3. Check browser console (frontend errors)
4. Verify all environment variables are set

---

**Total Cost: $0/month** 🎉

Your full-stack shipping platform is now live and free!

