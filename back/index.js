import conn from "#db"
import { env } from "#utils"
import app from "./app/index.js"

await conn.sync({ force: true })
app.listen(env.SV_PORT)



