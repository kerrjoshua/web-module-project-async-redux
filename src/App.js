import React from 'react';
import './App.css';
import Form from './components/Form'
import data from './resources/recipe'

//Example Request and Response
//GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
// GET https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

function App() {

  const recipeData = data.recipes[0];
  const summary = () => {
    return {__html: recipeData.summary}
  }


  return (
    <div className="App">
      <header><h1>Random Veggie Recipe App</h1>
      </header>
      <section>
        <Form />
      </section>
      <div className='recipe'>
        <div className='Row'>
          <div className='left'>
            <h2>{recipeData.title}</h2>
            <div className='summary' name='summary'>
              <p dangerouslySetInnerHTML={summary()}></p>
            </div>
          </div>
          <div className='right'>
            <div 
              className='ingredients' 
              name='ingredients'>
              <h4>Ingredients:</h4>
              <ul>
                {recipeData.extendedIngredients.map(ing => {
                 return  (<li key={ing.id}>{ing.name}</li>)
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          
        <div className='steps'>
          {recipeData.analyzedInstructions[0].steps.map(stp => {
            return (<p key={stp.number}><b>Step {stp.number}: </b>{stp.step}</p>)
          })}
          
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;