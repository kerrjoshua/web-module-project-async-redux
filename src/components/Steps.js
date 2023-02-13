import React from 'react'
import { connect } from 'react-redux'

const Steps = props => {
    const { recipeData } = props;
    return (
        <div className='steps'>
            {recipeData.analyzedInstructions[0].steps.map(stp => {
                return (<p key={stp.number}><b>Step {stp.number}: </b>{stp.step}</p>)
            })}
    
        </div>

    )
}

const mapStateToProps = state => {
    return {
        recipeData: state.recipeData
    }

}

export default connect(mapStateToProps, {})(Steps);