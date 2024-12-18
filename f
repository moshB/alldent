// Directory structure:
// project-root/
// ├── backend/
// │   ├── app.js
// │   ├── models/
// │   │   ├── User.js
// │   │   └── Appointment.js
// │   ├── routes/
// │   │   ├── userRoutes.js
// │   │   └── appointmentRoutes.js
// │   └── config/
// │       └── db.js
// ├── frontend/
// │   ├── src/
// │   │   ├── components/
// │   │   │   ├── Navbar.js
// │   │   │   ├── DoctorProfile.js
// │   │   │   └── AppointmentScheduler.js
// │   │   ├── pages/
// │   │   │   ├── HomePage.js
// │   │   │   ├── LoginPage.js
// │   │   │   └── RegisterPage.js
// │   │   ├── App.js
// │   │   └── index.js
// ├── package.json
// └── README.md

// backend/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['patient', 'doctor'], required: true },
});

module.exports = mongoose.model('User', userSchema);

// backend/models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);

// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  // Registration logic
});

router.post('/login', async (req, res) => {
  // Login logic
});

module.exports = router;

// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // Create appointment logic
});

router.get('/', async (req, res) => {
  // Get appointments logic
});

module.exports = router;

// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// frontend/src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Appointment Scheduler</h1>
    </div>
  );
}

export default HomePage;

// frontend/src/pages/LoginPage.js
import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      {/* Login form */}
    </div>
  );
}

export default LoginPage;

// frontend/src/pages/RegisterPage.js
import React from 'react';

function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      {/* Registration form */}
    </div>
  );
}

export default RegisterPage;

// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
