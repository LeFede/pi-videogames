import { env } from "#utils"
import { adaptVideogame } from "#adapters"

export const singleVideogame = async (req, res) => {
  const { id } = req.params
  try {
    let game = await fetch(env.API_URL + env.API_GAME_PATH + id + '?key=' + env.API_KEY)
    game = await game.json()
    
    if (game.detail) throw new Error(game.detail)

    game = adaptVideogame(game, false)

    res.status(200).send(game)

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

