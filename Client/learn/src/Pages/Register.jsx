
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Join Learnify</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Register</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Registration Form Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h2 className="mb-4">Create Your Account</h2>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="terms" />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="/terms">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Create Account</button>
                  </div>
                </div>
              </form>
              <div className="mt-3 text-center">
                Already have an account? <Link to="/login">Login here</Link>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h2 className="mb-4">Why Join Learnify?</h2>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height: "50px"}}>
                    <i className="fa fa-graduation-cap text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Access to Premium Courses</h5>
                    <p className="mb-0">Over 1,000 courses in various categories taught by expert instructors</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height: "50px"}}>
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Community Support</h5>
                    <p className="mb-0">Connect with like-minded learners and get help when you need it</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width: "50px", height: "50px"}}>
                    <i className="fa fa-certificate text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Certificates</h5>
                    <p className="mb-0">Earn certificates upon course completion to showcase your skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration Form End */}
    </>
  );
};

export default Register;