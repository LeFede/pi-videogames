import express from "express"
import cors from "cors"
import routes from "#routes"

  // const addVideogame = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:3001/videogames`, {
  //       method: "POST",
  //       headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         nombre: "cualquier cosa",
  //       })
  //     })
  //
  //     // const newVideogame = await res.json()
  //
  //     // console.log(newVideogame)
  //     // dispatch(addSingleVideogame(newVideogame.message))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', routes)

export default app
