import React from 'react';

const CourseCard = ({ image, price, rating, title, instructor, duration, students, delay }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
        <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={image} alt={title} />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a href="/courses/details" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                    <a href="/courses/enroll" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                </div>
            </div>
            <div className="text-center p-4 pb-0">
                <h3 className="mb-0">${price}</h3>
                <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                        <small key={i} className="fa fa-star text-primary"></small>
                    ))}
                    <small>({rating})</small>
                </div>
                <h5 className="mb-4">{title}</h5>
            </div>
            <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{instructor}</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{duration}</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{students} Students</small>
            </div>
        </div>
    </div>
  );
};

export default CourseCard;