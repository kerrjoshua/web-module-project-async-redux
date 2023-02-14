
import data from '../resources/recipe'
import { FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAIL } from '../actions';

const initialState = {
    recipeData:data.recipes[0],
    loading: false,
    err: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RECIPE_START:
            return {
                ...state,
                loading: true,
                err: ""

            }
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                loading: false,
                recipeData: action.payload,
                err: ""
            }
        case FETCH_RECIPE_FAIL:
            return { 
                ...state,
                err: action.payload

            }

        default:
            return(state); 

    }

}

export default reducer;