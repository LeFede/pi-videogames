import { adaptVideogame } from "#adapters"
// import data from "../../games.json" assert { type: "json" }
import { env } from "#utils"

export const allVideogames = async (req, res) => {
  try {
    
    // let games = await fetch(env.API_URL + env.API_GAME_PATH + "?key=" + env.API_KEY)
    // games = await games.json()
    // games = games.results.map(adaptVideogame)
    // res.status(200).send(games)

    let games = [
      fetch(`${env.API_URL + env.API_GAME_PATH}?page_size=40&key=${env.API_KEY}`),
      fetch(`${env.API_URL + env.API_GAME_PATH}?page_size=40&page=2&key=${env.API_KEY}`),
      fetch(`${env.API_URL + env.API_GAME_PATH}?page_size=20&page=5&key=${env.API_KEY}`),
    ]

    games = await Promise.all(games)
    games = games.map(e => e.json())
    games = await Promise.all(games)

    games = games.reduce((prev, curr) => {
      return [
        ...prev,
        ...curr.results
      ]
    }, [])


    res.status(200).json(games.map(adaptVideogame))

  } catch (error) {
  }
}

