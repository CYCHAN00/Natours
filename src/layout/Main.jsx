import React from 'react';
import SectionAbout from '../components/SectionAbout';
import SectionFeature from '../components/SectionFeature';
import SectionStories from '../components/SectionStories';
import SectionTour from '../components/SectionTour';

const Main = () => {
  return (
    <main>
      <SectionAbout></SectionAbout>
      <SectionFeature></SectionFeature>
      <SectionTour></SectionTour>
      <SectionStories></SectionStories>
    </main>
  );
};

export default Main;
