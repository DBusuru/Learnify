import React from 'react';
import CourseCard from '../components/courseCard';

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "img/course-1.jpg",
      price: "149.00",
      rating: "123",
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30",
      delay: "0.1s"
    },
    {
      id: 2,
      image: "img/course-2.jpg",
      price: "149.00",
      rating: "123",
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30",
      delay: "0.3s"
    },
    {
      id: 3,
      image: "img/course-3.jpg",
      price: "149.00",
      rating: "123",
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30",
      delay: "0.5s"
    }
  ];

  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
                {courses.map(course => (
                  <CourseCard 
                    key={course.id}
                    image={course.image}
                    price={course.price}
                    rating={course.rating}
                    title={course.title}
                    instructor={course.instructor}
                    duration={course.duration}
                    students={course.students}
                    delay={course.delay}
                  />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Courses;