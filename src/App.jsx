import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
