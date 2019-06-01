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
import { Menu } from 'components/Menu/Menu';
import { Cart } from 'components/Cart/Cart';

const NoMatch = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Menu />
        <Switch>
          <Route path="/" exact component={HotelList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/:id" exact component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export { App };
