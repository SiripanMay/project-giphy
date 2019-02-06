import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GiphyPage from './GiphyPage';
// import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';

function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/home" component={GiphyPage} />
        {/* <Route exact path="/favorite" component={FavoritePage} /> */}
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default Routes;
