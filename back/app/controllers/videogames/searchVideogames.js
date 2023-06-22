import { env } from "#utils"
import { adaptVideogame } from "#adapters"
import { Videogame } from "#db"

export const searchVideogames = async (req, res) => {
  const { name } = req.query
  try {
    let games = await fetch(env.API_URL + env.API_GAME_PATH + "?search=" + name + "&page_size=15" + "&key=" + env.API_KEY)
    games = await games.json()

    const dbGames = await Videogame.findAll()
    const pattern = new RegExp("(?=.*" + [name].join(")(?=.*") + ")", "gi"); 
    const dbData = dbGames.map(e => e.dataValues)
    const finalDBGames = dbData.filter(e => e.name.match(pattern))

    if (games == null || games.length < 1) {
      games = {
        results: []
      }
    }
    res.json([...games.results.map(adaptVideogame), ...finalDBGames])
    
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

