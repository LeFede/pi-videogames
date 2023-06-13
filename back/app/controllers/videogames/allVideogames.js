import { adaptVideogame } from "#adapters"
import data from "../../games.json" assert { type: "json" }

export const allVideogames = async (req, res) => {
  try {
    const adaptedVideogames = data.results.map(adaptVideogame)
    res.send(adaptedVideogames)
  } catch (error) {
  }
}

