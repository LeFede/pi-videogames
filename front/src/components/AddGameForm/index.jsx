
export const AddGameForm = () => {
  return (
    <form>
      <h3>Add videogame</h3>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value="" readOnly/>

      <label htmlFor="description">Description</label>
      <textarea type="text" id="description" name="description" value="" rows="5"/>

      <label htmlFor="image">Image Url</label>
      <input type="text" id="image" name="image" value=""/>
      
      <fieldset>
        <legend>Platforms</legend>

        <input type="checkbox" id="pc" name="platforms" value=""/>
        <label htmlFor="pc">Pc</label>

        <input type="checkbox" id="ps4" name="platforms" value=""/>
        <label htmlFor="ps4">Playstation 4</label>

        <input type="checkbox" id="xbox" name="platforms" value=""/>
        <label htmlFor="xbox">Xbox</label>

        <input type="checkbox" id="psx" name="platforms" value=""/>
        <label htmlFor="psx">PSX</label>

        <input type="checkbox" id="wiiu" name="platforms" value=""/>
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

    </form>
  )
}
