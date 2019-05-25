import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import store from 'store';
import { Home } from 'components/Home';

const NoMatch = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export { App };
