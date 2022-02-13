import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact element={<Dashboard />} />
    </Switch>
  );
};

export default Routes;
