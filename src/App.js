import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Form from './components/Form'
import Recipe from './components/Recipe'
import { getRecipe } from './actions'; 
import { useEffect } from 'react'


//Example Request and Response
//GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
// GET https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert




function App(props) {

  const { recipeData, loading, err } = props;
  useEffect(() => {
    
    props.getRecipe('vegetarian')
  },[]) 

  return (


    <div className="App">
          <header>
            <h1>Random Veggie Recipe App</h1>
          </header>
          <section>
            <Form />
          </section>
          
      {loading ? <h3>Please hold while we access your recipe!</h3> :
        <div><Recipe />
        </div>
      }</div>

  )
}
const mapStateToProps = state => {
  return {
    recipeData: state.recipeData,
    loading: state.loading,
    err: state.err
  }
}

export default connect(mapStateToProps, {getRecipe})(App);