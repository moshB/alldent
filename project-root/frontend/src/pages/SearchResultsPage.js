import React from 'react';
import Navbar from '../components/Navbar';
import './SearchResultsPage.css';

const clinicsResults = [
  { id: 1, name: "Healthy Smile Clinic", location: "Birmingham", rating: 4.5, image: "https://www.cityorthopeds.com/wp-content/uploads/2015/05/Young-girl-sitting-on-dental-chair-getting-her-teeth-checked-by-a-dentist.jpg" },
  { id: 2, name: "City Care Center", location: "London", rating: 4.7, image: "https://www.cityorthopeds.com/wp-content/uploads/2015/05/Young-girl-sitting-on-dental-chair-getting-her-teeth-checked-by-a-dentist.jpg" },
  { id: 3, name: "Wellness Clinic", location: "Heywood", rating: 4.3, image: "https://www.cityorthopeds.com/wp-content/uploads/2015/05/Young-girl-sitting-on-dental-chair-getting-her-teeth-checked-by-a-dentist.jpg" },
  { id: 4, name: "Family Health Clinic", location: "Heywood", rating: 4.6, image: "https://www.cityorthopeds.com/wp-content/uploads/2015/05/Young-girl-sitting-on-dental-chair-getting-her-teeth-checked-by-a-dentist.jpg" },
];

function SearchResultsPage() {
  return (
    <div className="search-results-page">
      <Navbar />
      <h1 className="results-title">Search Results</h1>
      <div className="results-container">
        {clinicsResults.map((clinic) => (
          <div key={clinic.id} className="result-card">
            <img src={clinic.image} alt={clinic.name} className="result-image" />
            <div className="result-info">
              <h2>{clinic.name}</h2>
              <p>Location: {clinic.location}</p>
              <p>Rating: {clinic.rating}</p>
            </div>
            <button className="view-details">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
