import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import store from 'store';
import { Home } from 'components/Home/Home';
import { Details } from 'components/Details/Details';

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
        <Route path="/:id" exact component={Details} />
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export { App };
