import { useState } from "react"
import { addSingleVideogame } from "@redux"
import { useDispatch, useSelector } from "react-redux"


// const { VITE_API_ENDPOINT: endpoint } = import.meta.env
const defaultForm = {
  name: "",
  plaftorms: [],
  image: "",
  genres: [],
  released: "",
  rating: 0
}

export const AddGameForm = () => {

  const [form, setForm] = useState(defaultForm)

  const dispatch = useDispatch()
  const { genres } = useSelector(state => state)

  const addVideogame = async () => {
    try {
      const res = await fetch(`http://localhost:3001/videogames`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image       : form.image,
          name        : form.name,
          // genres      : form.genres,
          rating      : form.rating,
          released    : form.released,
          // platforms: form.platforms
        })
      })

      // const newVideogame = await res.json()
      // dispatch(addSingleVideogame(newVideogame))

      setForm(defaultForm)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setForm(prev => {
      return {
        ...prev, 
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // setForm(defaultForm)
    addVideogame()
  }
  
  const handlePlatforms = (event) => {
    console.log(event.target)

  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add videogame</h3>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/>

      <label htmlFor="image">Image Url</label>
      <input type="text" id="image" name="image" value={form.image} onChange={handleChange}/>
      
      <label htmlFor="released">Released</label>
      <input type="text" id="released" name="released" value={form.released} onChange={handleChange}/>

      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" name="rating" value={form.rating} onChange={handleChange}/>

      <fieldset>
        <legend>Platforms</legend>
        
        <input 
          onChange={handlePlatforms} 
          type="checkbox" 
          id="pc" 
          name="platforms" 
          value="Pc"/>
        <label htmlFor="pc">Pc</label>

        <input 
          onChange={handlePlatforms} 
          type="checkbox" 
          id="ps4" 
          name="platforms" 
          value="Ps4"/>
        <label htmlFor="ps4">Playstation 4</label>

        <input 
          onChange={handlePlatforms} 
          type="checkbox" 
          id="xbox" 
          name="platforms" 
          value="Xbox"/>
        <label htmlFor="xbox">Xbox</label>

        <input 
          onChange={handlePlatforms} 
          type="checkbox" 
          id="psx" 
          name="platforms" 
          value="PSX"/>
        <label htmlFor="psx">PSX</label>

        <input 
          onChange={handlePlatforms} 
          type="checkbox" 
          id="wiiu" 
          name="platforms" 
          value=""/>
        <label htmlFor="wiiu">Wii-U</label>
      </fieldset>

      <fieldset>
        <legend>Genres</legend>

        {
          genres.map(genre => {
            let name = genre.name.toLowerCase()
            return (
              <>
                <input type="checkbox" id={name} name="genres" value=""/>
                <label htmlFor={name}>{name}</label>
              </>
            )
          })
        }
      </fieldset>

      <input type="submit" value="Create Videogame"/>
    </form>
  )
}
