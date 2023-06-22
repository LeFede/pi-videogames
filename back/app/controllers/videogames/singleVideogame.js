import { env } from "#utils"
import { adaptVideogame } from "#adapters"
import { Videogame } from "#db"

export const singleVideogame = async (req, res) => {
  const { id } = req.params
  try {
    let game = await fetch(env.API_URL + env.API_GAME_PATH + "/" + id + '?key=' + env.API_KEY)
    game = await game.json()

    if (game.detail) {
      game = await Videogame.findOne({ where: { id: id }})
      res.status(200).json({ 
        ...game.dataValues,
        genres: [],
        platforms: [],
      })
      
      return 
    }

    game = adaptVideogame(game, false)

    res.status(200).json(game)

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

