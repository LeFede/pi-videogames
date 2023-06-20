import { useState } from "react"
import { addSingleVideogame } from "@redux"

const { VITE_API_ENDPOINT: endpoint } = import.meta.env
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


  const addVideogame = async () => {
    try {
      const res = await fetch(`http://localhost:3001/videogames`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: "cualquier cosa",
        })
      })

      // const newVideogame = await res.json()

      // console.log(newVideogame)
      // dispatch(addSingleVideogame(newVideogame.message))
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

        <input type="checkbox" id="action" name="genres" value=""/>
        <label htmlFor="action">Action</label>

        <input type="checkbox" id="rpg" name="genres" value=""/>
        <label htmlFor="rpg">rpg</label>

        <input type="checkbox" id="adventure" name="genres" value=""/>
        <label htmlFor="adventure">adventure</label>
      </fieldset>

      <input type="submit" value="Create Videogame"/>
    </form>
  )
}
