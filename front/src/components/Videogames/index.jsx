import { Videogame } from "@components"
import styles from "./Videogames.module.css"

export const Videogames = ({ games, currentPage = 0 , gamesPerPage = 15}) => {
  return (
    <section className={styles.Videogames}>
      {
        games
          .map(game => <Videogame key={game.id} {...game} />)
          .slice( currentPage * gamesPerPage , (currentPage + 1) * gamesPerPage)
      }
    </section>
  )
}
