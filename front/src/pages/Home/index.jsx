import { Videogame } from "@components"
import styles from "./Home.module.css"

import { useEffect, useState } from "react"



export const Home = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch("http://localhost:3001/videogames")
      const data = await res.json()
      setGames(data)
    }
    fetchGames()
  }, [])

  return (
    <main className={styles.main}>
      <section>
        {
          games.map(game => <Videogame key={game.id} {...game} />)
        }
      </section>
      <div className={styles.pagination}>
        <div>&lt;</div>
        <div>&gt;</div>
      </div>
    </main>
  )
}
