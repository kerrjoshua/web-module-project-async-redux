
import data from '../resources/recipe'

const initialState = {
    recipeData:data.recipes[0],
    loading: false,
    err: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state); 

    }

}

export default reducer;