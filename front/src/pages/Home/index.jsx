import { Videogame } from "@components"
import styles from "./Home.module.css"

import { useSelector } from "react-redux"
import { useState } from "react"
import { clamp } from "../../utils"

const gamesPerPage = 15
const threshold = 3

export const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const { videogames: games } = useSelector(state => state) 
  const totalPages = Math.ceil(games.length / gamesPerPage)

  return (
    <main className={styles.main}>
      <section>
        {
          games
            .map(game => <Videogame key={game.id} {...game} />)
            .slice( currentPage * gamesPerPage , (currentPage + 1) * gamesPerPage)
        }
      </section>
      <div className={styles.pagination}>
        <button className={styles.button} onClick={() => setCurrentPage(prev => clamp(--prev, 0, totalPages))}>&lt;</button>
        {
          Array.from({ length: totalPages }).map((_, i) => {
            // if (i < currentPage - threshold || i > currentPage + threshold) return 
            return <button className={`${i === currentPage ? styles.selected : ""} ` + styles.button} onClick={() => setCurrentPage(i)}>
              {i + 1}
            </button>
          })
        }
        <button className={styles.button} onClick={() => setCurrentPage(prev => clamp(++prev, 0, totalPages - 1))}>&gt;</button>
      </div>
    </main>
  )
}

        // <button className={styles.button} onClick={() => setCurrentPage(0)}>&lt;&lt;</button>

        // <div className={styles.numbers}>
        // </div>
        // <button className={styles.button} onClick={() => setCurrentPage(totalPages - 1)}>&gt;&gt;</button>
