import sequelize from "#db"
import { env } from "#utils"
import app from "./app/index.js"

await sequelize.sync({ force: true })
app.listen(env.SV_PORT)



