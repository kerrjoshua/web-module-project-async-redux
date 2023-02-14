import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../actions';

 function Form(props) {

  const [ selected, setSelected ] = useState('vegetarian')
  const handleSubmit = (e => {
    e.preventDefault();
    props.getRecipe(selected)
  })
  const chooseType = (e => {
    setSelected(e.target.value)
  })
    return(
        <form onSubmit={handleSubmit}>Recipe Type:
            <div className='options'>
              <div className='choice'>
                <label htmlFor='vegetarian'>vegetarian</label>
                <input type='radio' id='vegetarian' name='recipeType' value='vegetarian' checked={selected === 'vegetarian'} onChange = {chooseType}/>
              </div>
              <div className='choice'>
              <label htmlFor='vegan'>vegan</label>
              <input type='radio' id='vegan' name='recipeType' value='vegan' checked={selected === 'vegan'} onChange={chooseType}/>
              </div>
            </div>
            <input type='submit' className='submit' value='Get Random Recipe'></input>

        </form>
    )
}

export default connect(null , {getRecipe})(Form);