import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Form from './components/Form'
import Ingredients from './components/Ingredients'
import Steps from './components/Steps'

//Example Request and Response
//GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
// GET https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

function App(props) {

  const { recipeData } = props;
  const summary = () => {
    return { __html: recipeData.summary }
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
            <Ingredients />
          </div>
        </div>
        <div className='bottomRow'>

          <Steps />

        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipeData: state.recipeData,
    loading: state.loading,
    err: state.err
  }
}

export default connect(mapStateToProps, {})(App);