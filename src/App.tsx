import React from 'react';
import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import NavigationBar from "./views/NavigationBar";
import Footer from "./views/Footer";
import Main from './views/Main'
import AuthenticationView from './views/AuthenticationView'
import ReviewBoardWriteView from './views/ReviewBoard/ReviewBoardWriteView';
import ReviewBoardDetailView from './views/ReviewBoard/ReviewBoardDetailView';
import ReviewBoardUpdateView from './views/ReviewBoard/ReviewBoardUpdateView';
import SignUpView from './views/AuthenticationView/SignUpView';
import { Button } from '@mui/material';

function App() {

  const path = useLocation();

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={(<Main />)} />
        <Route path="/auth">
          <Route path="sign-in" element={(<AuthenticationView />)}/>
          <Route path="sign-up" element={(<SignUpView />)}/>
        </Route>
        <Route path = "/reviewboard">
          <Route path = 'write' element = {(<ReviewBoardWriteView/>)}/>
          <Route path = 'detail/:reviewBoardNumber' element = {(<ReviewBoardDetailView/>)}/>
          <Route path = 'update/:reviewBoardNumber' element = {(<ReviewBoardUpdateView/>)}/>
        </Route>
      </Routes>
        <Button></Button>
      {path.pathname !== "/auth/sign-in" && path.pathname !== "/auth/sign-up" && <Footer />}
    </>
  );
}

export default App;
