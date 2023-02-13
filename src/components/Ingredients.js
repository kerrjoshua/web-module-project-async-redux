import React from 'react'
import { connect } from 'react-redux'

const Ingredients = (props) => {

    const { recipeData } = props
    return (
        <div
            className='ingredients'
            name='ingredients'>
            <h4>Ingredients:</h4>
            <ul>
                {recipeData.extendedIngredients.map(ing => {
                    return (<li key={ing.id}>{ing.name}</li>)
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipeData: state.recipeData
    }
}

export default connect(mapStateToProps, {})(Ingredients);