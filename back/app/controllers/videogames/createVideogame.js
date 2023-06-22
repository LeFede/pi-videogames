import { Videogame } from "#db"

export const createVideogame = async (req, res) => {
  // const { name } = req.body
  try {
    
    const newVideogame = await Videogame.create({
      ...req.body
    })

    console.log(newVideogame)
    res.send(newVideogame)

  } catch (error) {

  }
}

