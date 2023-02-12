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
      <div className='recipe'>
        <div className='row'>
          <div className='left'>
            <h2>Recipe title:</h2>
            <div className='summary' name='summary'>
              <p>This is a recipe for a delicious vegan or vegetarian dish. It will make you want to drool into your napkin when you smell the aroma of the dish as it cooks</p>
            </div>
          </div>
          <div className='ingredients' name='ingredients'>
            <h3>Ingredients:</h3>
            <ul>
              <li>first ingredient</li>
              <li>second ingredient</li>
              <li>etc.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;