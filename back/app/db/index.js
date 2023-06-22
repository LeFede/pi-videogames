import { Sequelize } from "sequelize"
import * as models from "#models"
import { env } from "#utils"

export const sequelize = new Sequelize(
  `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}/videogames`, 
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
)

Object.values(models.default).forEach((model) => model(sequelize)) 

export const { Genre, Videogame } = sequelize.models

Videogame.belongsToMany(Genre, { through: "videogame_genre", timestamps: false })
Genre.belongsToMany(Videogame, { through: "videogame_genre", timestamps: false })

export default sequelize
