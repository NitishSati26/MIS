import React from "react";
import Header from "components/Header";
import "Scenes/home/Home.css";
import image1 from "assets/image1.jpg";
import image2 from "assets/image2.jpg";
import image3 from "assets/image3.jpg";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div>
      <div className="flex-container">
      <div className="flex-items">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">Analytics</text>
        </svg>
      </div>
      <div className="flex-items">
        <Link to="/login" className="button-link">Login</Link>
      </div>
      <div className="flex-items">
      <Link to="/signup" className="button-link">Sign Up</Link>
      </div>
    </div>

    {/* <!-- Image Slider --> */}
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="image" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="image" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="image" />
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
    </div>
  );
};

export default Home;
