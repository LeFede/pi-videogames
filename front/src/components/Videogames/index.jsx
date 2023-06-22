import { Videogame } from "@components"
import styles from "./Videogames.module.css"
import { useSelector } from "react-redux"

export const Videogames = ({ games, currentPage = 0 , gamesPerPage = 15}) => {

  const { sorting, filtering } = useSelector(state => state)

  const sort = {
    name_ascending: (a,b) => a.name > b.name,
    name_descending: (a,b) => a.name < b.name,
    rating_ascending: (a,b) => a.rating > b.rating,
    rating_descending: (a,b) => a.rating < b.rating,
  }

  const filter = {
    none: (e) => e,
    action: (e) => e.genres.some(gen => gen.name === 'Action'),
    indie: (e) => e.genres.some(gen => gen.name === 'Indie'),
  }

  return (
    <section className={styles.Videogames}>
      {
        games
          .slice()
          .sort(sort[sorting])
          .filter(filter[filtering])
          .map(game => <Videogame key={game.id} {...game} />)
          .slice( currentPage * gamesPerPage , (currentPage + 1) * gamesPerPage)
      }
    </section>
  )
}
