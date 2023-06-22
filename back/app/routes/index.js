import { Router } from "express"
import videogames from "./videogames/index.js"
import genres from "./genres/index.js"

// const videogames = require("./videogames.js")
// const genres = require("./genres.js")
// const notFound = require("./notFound.js")

const router = Router();

router.use("/videogames", videogames)
router.use("/genres", genres)

router.use("*", (req, res) => {
  res.status(404).json({ message: "NOT FOUND"})
})

export default router
