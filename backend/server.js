const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expensesRoute');
const reportRoutes = require('./routes/reportsRoutes');
const dashboardRoutes = require('./routes/dashboardRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/ExpenseTracker/api/auth', authRoutes);
app.use('/ExpenseTracker/api/expenses', expenseRoutes);
app.use('/ExpenseTracker/api/reports', reportRoutes);
app.use('/ExpenseTracker/api/dashboard', dashboardRoutes);


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
