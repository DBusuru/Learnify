import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fa fa-3x fa-graduation-cap",
      title: "Skilled Instructors",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      delay: "0.1s"
    },
    {
      id: 2,
      icon: "fa fa-3x fa-globe",
      title: "Online Classes",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      delay: "0.3s"
    },
    {
      id: 3,
      icon: "fa fa-3x fa-home",
      title: "Home Projects",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      delay: "0.5s"
    },
    {
      id: 4,
      icon: "fa fa-3x fa-book-open",
      title: "Book Library",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      delay: "0.7s"
    }
  ];

  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                {services.map(service => (
                  <div key={service.id} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={service.delay}>
                      <div className="service-item text-center pt-3">
                          <div className="p-4">
                              <i className={`${service.icon} text-primary mb-4`}></i>
                              <h5 className="mb-3">{service.title}</h5>
                              <p>{service.description}</p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Services;