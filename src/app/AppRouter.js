import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import MainPage from './mainPage/MainPage';
import AboutPage from './aboutPage/AboutPage';
import CharacterDetailsPage from './characterPage/CharacterPage';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/character/:id" component={CharacterDetailsPage} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AppRouter;