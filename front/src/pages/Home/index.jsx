import { Videogames } from "@components"
import styles from "./Home.module.css"

import { setCurrentPage } from "@redux"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { clamp } from "@utils"

const gamesPerPage = 15


export const Home = () => {

  const dispatch = useDispatch()
  const { currentPage } = useSelector(state => state)
  const [totalPages, setTotalPages] = useState()

  const { videogames: games, search } = useSelector(state => state) 

  useEffect(() => {
    setTotalPages(Math.ceil(games.length / gamesPerPage))
  }, [games, search])

  return (
    <main className={styles.main}>
      <section>
        { games?.length ? "" : <h1>Loading...</h1>}
        <Videogames games={games} gamesPerPage={gamesPerPage} currentPage={currentPage}  />
      </section>
      <div className={styles.pagination}>
        <button className={styles.button} onClick={() => dispatch(setCurrentPage(clamp(currentPage - 1, 0, totalPages - 1)))}>&lt;</button>
        {
          Array.from({ length: totalPages }).map((_, i) => {
            return <button key={i} className={`${i === currentPage ? styles.selected : ""} ` + styles.button} onClick={() => dispatch(setCurrentPage(i))}>
              {i + 1}
            </button>
          })
        }
        <button className={styles.button} onClick={() => dispatch(setCurrentPage(clamp(currentPage + 1, 0, totalPages - 1)))}>&gt;</button>
      </div>
    </main>
  )
}


