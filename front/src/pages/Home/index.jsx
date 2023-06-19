import { Videogame } from "@components"
import styles from "./Home.module.css"

import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { clamp } from "../../utils"

const gamesPerPage = 15


export const Home = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState()

  const { videogames: games, search } = useSelector(state => state) 

  const filterByRegexp = game => {
    if (search === "") return game
    const pattern = new RegExp("\\b" + search + "\\b", "gi")
    return game.name.match(pattern)
  }

  useEffect(() => {
    setTotalPages(Math.ceil(games.filter(filterByRegexp).length / gamesPerPage))
  }, [games, search])

  return (
    <main className={styles.main}>
      <section>
        {
          games
            .filter(filterByRegexp)
            .map(game => <Videogame key={game.id} {...game} />)
            .slice( currentPage * gamesPerPage , (currentPage + 1) * gamesPerPage)
        }
      </section>
      <div className={styles.pagination}>
        <button className={styles.button} onClick={() => setCurrentPage(prev => clamp(--prev, 0, totalPages))}>&lt;</button>
        {
          Array.from({ length: totalPages }).map((_, i) => {
            return <button key={i} className={`${i === currentPage ? styles.selected : ""} ` + styles.button} onClick={() => setCurrentPage(i)}>
              {i + 1}
            </button>
          })
        }
        <button className={styles.button} onClick={() => setCurrentPage(prev => clamp(++prev, 0, totalPages - 1))}>&gt;</button>
      </div>
    </main>
  )
}

