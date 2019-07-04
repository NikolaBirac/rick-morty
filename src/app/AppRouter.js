import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './partials/Header';
import MainPage from './mainPage/MainPage';
import CharacterDetailsPage from './characterPage/CharacterPage';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/character/:id" component={CharacterDetailsPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;