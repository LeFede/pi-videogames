import { Router } from "express"
import { 
  allGenres,
} from "#controllers"

const router = Router()

router.get("/", allGenres)

export default router
