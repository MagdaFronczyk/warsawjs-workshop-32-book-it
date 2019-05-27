import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import store from 'store';
import { HotelList } from 'components/HotelList/HotelList';
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
        <Route path="/" exact component={HotelList} />
        <Route path="/:id" exact component={Details} />
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export { App };
