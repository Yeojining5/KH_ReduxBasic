import React from 'react';
import ReduxHeader from './components/include/ReduxHeader';
import ReduxBottom from './components/include/ReduxBottom';
import { useState } from 'react';
import MainPage from './components/pages/MainPage';

const ReduxApp = () => {


  return (
    <div className="container">
      <h1>React Redux 실습</h1>
      <MainPage />
      <ReduxHeader />
      <ReduxBottom />
    </div>
  );
};

export default ReduxApp;