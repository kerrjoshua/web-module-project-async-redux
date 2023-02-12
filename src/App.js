import React from 'react';
import './App.css';
import Form from './components/Form'

//Example Request and Response
//GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
// GET https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

function App() {
  return (
    <div className="App">
      <header><h1>Random Veggie Recipe App</h1>
      </header>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default App;