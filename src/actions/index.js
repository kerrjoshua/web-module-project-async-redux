
import axios from 'axios'

export const FETCH_RECIPE_START = "FETCH_RECIPE_START"
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS"
export const FETCH_RECIPE_FAIL = "FETCH_RECIPE_FAIL"




export const getRecipe = diet => dispatch => {
    
    console.log("entered getRecipe")
    dispatch({type: FETCH_RECIPE_START});
    axios
        .get(`https://api.spoonacular.com/recipes/random?number=1&tags=${diet}&apiKey=76215c4c42024dbd91d6635575dea477`)
        .then(res => 
            dispatch({type: FETCH_RECIPE_SUCCESS, payload: res.data.recipes[0]})
        )
        .catch(err => dispatch({type: FETCH_RECIPE_FAIL, payload:err})
        )
}  


