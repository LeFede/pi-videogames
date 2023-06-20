import { Sequelize } from "sequelize"
import { Genre, Videogame } from "#models"
import { env } from "#utils"

export const sequelize = new Sequelize(
  `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}/videogames`, 
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
)

Genre(sequelize)
Videogame(sequelize)

const { genre: seqGenre, videogame: seqVideogame } = sequelize.models

seqVideogame.belongsToMany(seqGenre, { through: "videogame_genre", timestamps: false })
seqGenre.belongsToMany(seqVideogame, { through: "videogame_genre", timestamps: false })

export default sequelize
export const models = {
  ...sequelize.models
}
