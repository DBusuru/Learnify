import React from 'react';
import TestimonialItem from '../components/testimonialItem';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/img/testimonial-1.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 2,
      image: "/img/testimonial-2.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 3,
      image: "/img/testimonial-3.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
      id: 4,
      image: "/img/testimonial-3.jpg", 
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    }
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Students Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                {testimonials.map(testimonial => (
                  <TestimonialItem 
                    key={testimonial.id}
                    image={testimonial.image}
                    name={testimonial.name}
                    profession={testimonial.profession}
                    text={testimonial.text}
                  />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Testimonials;