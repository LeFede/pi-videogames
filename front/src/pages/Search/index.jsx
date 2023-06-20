import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Videogames } from "@components"
import styles from "./Search.module.css"

export const Search = () => {
  const [searchParams, _] = useSearchParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true)
      const name = searchParams.get("name")
      const res = await fetch(`http://localhost:3001/videogames/name?name=${name}`)
      const games = await res.json()
      
      setLoading(false)
      setGames(games)
    }

    fetchSearch()
  }, [searchParams])

  return (
    <main className={styles.main}>
      { loading ? (
        <h1>Loading...</h1>
      ) : (
        <>

          { games.length ? <Videogames games={games} /> : (
            <h1>No games found</h1>
          )}
        </>
      )}
    </main>
  )
}

      // { searched.map(e => <>"xd"</>) }

