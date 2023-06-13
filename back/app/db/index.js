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

export default sequelize
export const models = {
  ...sequelize.models
}
