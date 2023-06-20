import { env } from "#utils"
import { adaptVideogame } from "#adapters"

export const searchVideogames = async (req, res) => {
  const { name } = req.query
  try {
    let games = await fetch(env.API_URL + env.API_GAME_PATH + "?search=" + name + "&page_size=15" + "&key=" + env.API_KEY)
    games = await games.json()
    res.json(games.results.map(adaptVideogame))
    
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

