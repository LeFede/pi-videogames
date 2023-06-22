import { useDispatch } from "react-redux"
import { setSorting } from "@redux"
import { useState } from "react"

export const SortingForm = () => {

  const dispatch = useDispatch()

  const [selected, setSelected] = useState('none')

  const handleChange = (e) => {
    const { sorting } = e.target.dataset
    setSelected(sorting)
    dispatch(setSorting(sorting))
  }

  return (
    <form >
      <h3>Sorting</h3>
      
      <fieldset> 
        <legend>Name</legend>
        <input type="radio" id="none" name="sorting" data-sorting="none" onChange={handleChange} checked={selected === 'none'}/>
        <label htmlFor="none">None</label>
        
        <input type="radio" id="name_ascending" name="sorting" data-sorting="name_ascending" onChange={handleChange} checked={selected === 'name_ascending'} />
        <label htmlFor="name_ascending">Ascending</label>

        <input type="radio" id="name_descending" name="sorting" data-sorting="name_descending" onChange={handleChange} checked={selected === 'name_descending'}/>
        <label htmlFor="name_descending">Descending</label>
      </fieldset>

      
      <fieldset> 
        <legend>Rating</legend>
        <input type="radio" id="rating_ascending" name="sorting" data-sorting="rating_ascending" onChange={handleChange} checked={selected === 'rating_ascending'} />
        <label htmlFor="rating_ascending">Ascending</label>

        <input type="radio" id="rating_descending" name="sorting" data-sorting="rating_descending" onChange={handleChange} checked={selected === 'rating_descending'}/>
        <label htmlFor="rating_descending">Descending</label>
      </fieldset>
    </form>
  )
}
