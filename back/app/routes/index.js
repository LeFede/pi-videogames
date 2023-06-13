import { Router } from "express"
import videogames from "./videogames/index.js"

// const videogames = require("./videogames.js")
// const genres = require("./genres.js")
// const notFound = require("./notFound.js")

const router = Router();

router.use("/videogames", videogames)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/videogames', videogames)
// router.use('/genres', genres)
// router.get('*', notFound)

export default router
