import React from 'react';
import SectionAbout from '../components/SectionAbout';
import SectionBook from '../components/SectionBook';
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
      <SectionBook></SectionBook>
    </main>
  );
};

export default Main;
