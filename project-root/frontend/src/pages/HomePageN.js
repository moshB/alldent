import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ייבוא ניווט
import Navbar from '../components/Navbar';
import './HomePageN.css';

const clinicsData = [
  { id: 1, name: "Healthy Smile Clinic", location: "Birmingham", rating: 4.5, image: "https://via.placeholder.com/200" },
  { id: 2, name: "City Care Center", location: "London", rating: 4.7, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Wellness Clinic", location: "Heywood", rating: 4.3, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Family Health Clinic", location: "Heywood", rating: 4.6, image: "https://via.placeholder.com/200" },
];

function HomePageN() {
  const [clinicName, setClinicName] = useState('');
  const [location, setLocation] = useState('');
  const [filteredClinics, setFilteredClinics] = useState(clinicsData);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = clinicsData.filter((clinic) =>
      clinic.name.toLowerCase().includes(clinicName.toLowerCase()) &&
      clinic.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredClinics(filtered);

    // ניתן להוסיף ניווט אם נדרש
    // navigate('/search-results');
  };

  return (
    <div className="homepageN">
      <Navbar />
      <div className="hero-section">
        <h1>Find the Best Clinics Near You</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by clinic name..."
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            className="search-bar"
          />
          <input
            type="text"
            placeholder="Search by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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

export default HomePageN;
