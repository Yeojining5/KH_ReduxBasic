import React from 'react';
import ReduxBottom from '../include/ReduxBottom';
import ReduxHeader from '../include/ReduxHeader';
import MainPage from './MainPage';

const HomePage = () => {
  return (
    <>
      <ReduxHeader />
        <div className="container">
          홈페이지
          <MainPage />
        </div>
      <ReduxBottom />
    </>
  );
};

export default HomePage;