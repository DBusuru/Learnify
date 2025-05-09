import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';  // Import authentication routes

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON
app.use(express.json());

// Connect to MongoDB using the URI from .env file
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Use the authentication routes
app.use('/api/auth', authRoutes);  // Add this line to use the routes

// Example route
app.get('/', (req, res) => {
  res.send("Hello from the Learnify server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
