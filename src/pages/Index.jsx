import React, { Fragment } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Main from '../layout/Main';
const Index = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
};

export default Index;
