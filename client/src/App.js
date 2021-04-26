import React from 'react'
import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route
        } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage.js';
import LoginPage from './components/views/LoginPage/LoginPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
import Auth from './hoc/auth'

// Auth(HOC)
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// ./src/hoc/auth.js 참고
function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* exact path : 주어진 경로와 정확하게 맞아 떨어져야 설정한 컴포넌트를 보여준다. */}
          <Route exact path="/"  component={Auth(LandingPage, null, true)} >
            {/* <LandingPage> */}
          </Route>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          
          <Route path="/register" component={Auth(RegisterPage, false)} >
            {/* <RegisterPage /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
