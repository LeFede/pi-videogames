import { Genre } from "#db"
import { env } from "#utils"

export const allGenres = async (_, res) => {
  try {
    let genres = await Genre.findAll()
    if (genres.length) {
      return res.status(200).json(genres)
    }

    genres = await fetch(`${env.API_URL}/genres?key=${env.API_KEY}`)
    genres = await genres.json()

    await Genre.bulkCreate(genres.results)   

    res.status(200).json(genres.results)
    

  } catch (error) {

  }
}
