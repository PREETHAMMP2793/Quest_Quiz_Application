const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const UserRoutes = require('./routes/UserRoute')
const ResultRoutes = require('./routes/ResultRoute')
const AdminRoutes = require('./routes/AdminRoute')
const QuestionRoutes = require('./routes/QuestionRoute')

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',                // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],      // Allowed HTTP methods
    credentials: true,                              // Enable cookies and other credentials if needed
}));

app.use(express.json());                // Middleware to parse JSON data

// Connect to MongoDB
connectDB();

// Test Route for server status
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Use test routes
app.use('/api/users', UserRoutes);
app.use('/api/results', ResultRoutes);
app.use('/api/admins', AdminRoutes);
app.use('/api/questions', QuestionRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});