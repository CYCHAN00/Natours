import React from 'react';
import SectionAbout from '../components/SectionAbout';
import SectionFeature from '../components/SectionFeature';
import SectionTour from '../components/SectionTour';

const Main = () => {
  return (
    <main>
      <SectionAbout></SectionAbout>
      <SectionFeature></SectionFeature>
      <SectionTour></SectionTour>
    </main>
  );
};

export default Main;
