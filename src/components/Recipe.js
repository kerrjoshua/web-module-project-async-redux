import React from 'react'
import { connect } from 'react-redux'


import Ingredients from './Ingredients'
import Steps from './Steps'

const Recipe = props => {

    const { recipeData } = props;
    const summary = () => {
      return { __html: recipeData.summary }
    }

  

    return (
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
    )
}

const mapStateToProps = state => {
    return {
        recipeData: state.recipeData
    }
}

export default connect(mapStateToProps, {})(Recipe);