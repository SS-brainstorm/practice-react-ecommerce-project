import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import LoginPage from './pages/login/login';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
