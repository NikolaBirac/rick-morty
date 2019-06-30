import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
            {/* <Route exact path="/posts/new" component={NewPost} /> */}
            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;