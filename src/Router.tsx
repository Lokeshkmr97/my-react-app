import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
// import UserInfoForm from './UserInfoForm';
import SecondPage from './SecondPage'; 

const AppRouter: React.FC = () => {
//   const userDetails = JSON.parse(localStorage.getItem('userDetails') || 'null');

  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact>
          {userDetails ? <Redirect to="/second-page" /> : <UserInfoForm />}
        </Route> */}
        <Route path="/second-page">
          <SecondPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
