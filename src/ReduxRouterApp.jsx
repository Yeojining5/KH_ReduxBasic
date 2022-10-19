import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import NoticePage from './components/pages/NoticePage';

const ReduxRouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/notice" exact={true} element={<NoticePage />} />
      </Routes>
    </>
  );
};

export default ReduxRouterApp;