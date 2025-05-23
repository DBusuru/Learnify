import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <Carousel 
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        className="header-carousel"
      >
        <div className="position-relative">
          <img 
            className="img-fluid" 
            src="/img/carousel-1.jpg" 
            alt="Learning platform"
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
              style={{
                background: "linear-gradient(rgba(24, 29, 56, .8), rgba(24, 29, 56, .6))",
                boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)"
              }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown" 
                      style={{ fontWeight: "600", letterSpacing: "1px" }}>
                    Best Online Courses
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown" 
                      style={{ fontWeight: "700", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                    The Best Online Learning Platform
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Expand your skills with expert-led courses in programming, design, business, and more. 
                    Start your learning journey today with our flexible online programs.
                  </p>
                  <div className="d-flex">
                    <Link to="/about" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">
                      <i className="fa fa-info-circle me-2"></i>Read More
                    </Link>
                    <Link to="/register" className="btn btn-light py-md-3 px-md-5 rounded-pill">
                      <i className="fa fa-user-plus me-2"></i>Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="position-relative">
          <img 
            className="img-fluid" 
            src="/img/carousel-2.jpg" 
            alt="Remote learning"
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" 
              style={{
                background: "linear-gradient(rgba(24, 29, 56, .8), rgba(24, 29, 56, .6))",
                boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)"
              }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown"
                      style={{ fontWeight: "600", letterSpacing: "1px" }}>
                    Best Online Courses
                  </h5>
                  <h1 className="display-3 text-white animated slideInDown"
                      style={{ fontWeight: "700", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                    Get Educated Online From Your Home
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Learn at your own pace with 24/7 access to high-quality courses. Our interactive 
                    platform makes learning engaging and effective, no matter where you are.
                  </p>
                  <div className="d-flex">
                    <Link to="/about" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">
                      <i className="fa fa-info-circle me-2"></i>Read More
                    </Link>
                    <Link to="/register" className="btn btn-light py-md-3 px-md-5 rounded-pill">
                      <i className="fa fa-user-plus me-2"></i>Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;