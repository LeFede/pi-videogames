import { Router } from "express"
import { 
  allVideogames, 
  searchVideogames,
  singleVideogame,
  createVideogame,
} from "#controllers"

const router = Router()

router.get("/", allVideogames)
router.get("/name", searchVideogames)
router.get("/:id", singleVideogame)

router.post("/", createVideogame)

export default router
