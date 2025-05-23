import React from 'react';
import CarouselComponent from '../common/carousel';  // Make sure this matches your export
import Services from '../components/services';
import About from './about';
import Categories from '../components/Categories';
import Courses from './courses';
import Team from './Team';

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <Services />
      <About />
      <Categories />
      <Courses />
      <Team />
    </>
  );
};

export default HomePage;