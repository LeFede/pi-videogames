import React from 'react'
import { useSelector } from 'react-redux'


export const FilterForm = () => {

  const { genres } = useSelector(state => state)

  return (
    <form >
      <h3>Filter</h3>
      <fieldset>
        <legend>Genre</legend>
        {
          genres.map(genre => {
            return (
              <>
                <input type="checkbox" id="action" name="genresFilter" value=""/>
                <label htmlFor="action">{genre.name}</label>
              </>
            )
          })
        }
      </fieldset>
    </form>
  )
}
