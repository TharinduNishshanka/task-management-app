// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';

// Import the routes
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { ensureAuth } from './middlewares/authMiddleware.js';  // Import the auth middleware

dotenv.config();  // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected locally'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Set up the Express app
const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));  // Allow CORS for frontend
app.use(express.json());  // Parse incoming JSON requests

// Set up session handling and passport
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Use the routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/tasks', ensureAuth, taskRoutes);  // Task management routes (with authentication protection)

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
