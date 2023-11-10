import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/notes/:id" component={NotePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
