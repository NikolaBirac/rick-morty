import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Header } from './partials/Header';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            {/* <Route exact path="/home" component={Home} />
            <Route path="/authors/:id" component={AuthorProfile} />
            <Route exact path="/posts/new" component={NewPost} />
            <Redirect from="/" to="/home" /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;