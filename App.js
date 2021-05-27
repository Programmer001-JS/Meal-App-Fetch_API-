import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Categories from './components/Categories';
import Meals from './components/Meals';
import MealDetails from "./components/MealDetails"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Categories} />
        <Route path="/meals/:categories" component={Meals} />
        <Route path="/details/:id" component={MealDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
