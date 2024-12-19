import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

function HomePage() {
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', condition, location);
        // ניתן להוסיף פונקציית ניווט לעמוד תוצאות החיפוש
    };

    return (
        <div className="homepage-new">
            <Navbar />
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Find the Best Dentists Near You</h1>
                    <p className="hero-subtitle">Schedule appointments with top-rated dental professionals</p>

                    {/* <h1 className="hero-title">Find the Right Doctor</h1>
                    <p className="hero-subtitle">Book appointments with top-rated doctors near you</p> */}



                    <div className="search-bar-container">
                        <input
                            type="text"
                            placeholder="Condition, procedure, or doctor..."
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                            className="search-input"
                        />
                        <input
                            type="text"
                            placeholder="City or location..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="search-input"
                        />
                        <button className="search-button" onClick={handleSearch}>
                            Find Care
                        </button>
                    </div>
                </div>
            </header>
            <div className="features-section">
                <div className="feature-card">
                    <img src="https://via.placeholder.com/100" alt="Easy Booking" />
                    <h3>Easy Booking</h3>
                    <p>Schedule appointments with just a few clicks.</p>
                </div>
                <div className="feature-card">
                    <img src="https://via.placeholder.com/100" alt="Verified Doctors" />
                    <h3>Verified Doctors</h3>
                    <p>Connect with top-rated and trusted professionals.</p>
                </div>
                <div className="feature-card">
                    <img src="https://via.placeholder.com/100" alt="24/7 Support" />
                    <h3>24/7 Support</h3>
                    <p>Our support team is available round the clock.</p>
                </div>
            </div>
            <div className="popular-locations">
                <h2>Popular Locations</h2>
                <div className="locations-list">
                    <a href="/search-results?location=London">London</a>
                    <a href="/search-results?location=Birmingham">Birmingham</a>
                    <a href="/search-results?location=Manchester">Manchester</a>
                </div>
            </div>
            <div className="testimonials-carousel">
                <h2>What Our Users Say</h2>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/60" alt="User Sarah" />
                    <p>"This platform helped me find the perfect doctor near my home!"</p>
                    <p>- Sarah, Tel Aviv</p>
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/60" alt="User John" />
                    <p>"Easy and fast booking. Highly recommended!"</p>
                    <p>- John, Jerusalem</p>
                </div>
            </div>



            {/* <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/60" alt="User Sarah" />
          <p>"This platform helped me find the perfect doctor near my home!"</p>
          <p>- Sarah, Tel Aviv</p>
        </div>
        <div className="testimonial-card">
          <img src="https://via.placeholder.com/60" alt="User John" />
          <p>"Easy and fast booking. Highly recommended!"</p>
          <p>- John, Jerusalem</p>
        </div>
      </div> */}
            <div className="quick-booking">
                <h2>Quick Booking</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <select>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="checkup">Dental Checkup</option>
                    </select>
                    <button type="submit">Book Now</button>
                </form>
            </div>

        </div>
    );
}

export default HomePage;
