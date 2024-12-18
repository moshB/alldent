import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא ניווט
import Navbar from '../components/Navbar';
import './HomePage.css';

const clinicsData = [
  { id: 1, name: "Healthy Smile Clinic", location: "Birmingham", rating: 4.5, image: "https://via.placeholder.com/200" },
  { id: 2, name: "City Care Center", location: "London", rating: 4.7, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Wellness Clinic", location: "Heywood", rating: 4.3, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Family Health Clinic", location: "Heywood", rating: 4.6, image: "https://via.placeholder.com/200" },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClinics, setFilteredClinics] = useState(clinicsData);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search-results'); // מעבר לעמוד תוצאות החיפוש
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <h1>Find the Best Clinics Near You</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by clinic name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>

      <div className="clinics-section">
        {filteredClinics.map((clinic) => (
          <div key={clinic.id} className="clinic-card">
            <img src={clinic.image} alt={clinic.name} className="clinic-image" />
            <div className="clinic-info">
              <h2>{clinic.name}</h2>
              <p>Location: {clinic.location}</p>
              <p>Rating: {clinic.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
