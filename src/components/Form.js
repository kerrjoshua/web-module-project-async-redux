import React from 'react'

export default function Form() {
    return(
        <form>Recipe Type:
            <div className='options'>
              <div className='choice'>
                <label htmlFor='vegetarian'>vegetarian</label>
                <input type='radio' id='vegetarian' name='recipeType' value='vegetarian' defaultChecked />
              </div>
              <div className='choice'>
              <label htmlFor='vegan'>vegan</label>
              <input type='radio' id='vegan' name='recipeType' value='vegan' />
              </div>
            </div>
            <input type='submit' className='submit' value='Get Random Recipe'></input>

        </form>
    )
}