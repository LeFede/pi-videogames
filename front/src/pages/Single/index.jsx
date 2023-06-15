import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./Single.module.css"

const { VITE_SINGLE_GAME_URL: url } = import.meta.env
const defaultGame = {
    genres    : [],
    id        : "",
    image     : "",
    name      : "",
    platforms : [],
    rating    : "",
    released  : "",
}
 
export const Single = () => {

  const [game, setGame] = useState(defaultGame)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const fetchVideogame = async () => {
      const res = await fetch(url + params.id)
      const data = await res.json()

      if (data.error) 
        setError(data.error)
      else 
        setGame(data) 

      setLoading(false)
    }

    fetchVideogame()
  }, [])


  return (
    <main className={styles.single}>
      { error && <>
        <h1>We couldn't find that game =(</h1> 
        <Link to="/home">Back</Link>
      </>}

      { loading ? <h1>Loading...</h1> : (
        <section className={styles.data}> 
          { game.name && <div className={styles.title}><h1>{game.name}</h1><h3> ~ ({game.rating}⭐)</h3></div> }
          { game.released && <p className={styles.released}>📅 {game.released}</p> }

          <h3>Genres</h3>
          <div className={styles.fieldset}>
            { game.genres.length ? game.genres.map(genre => <p>{genre.name}</p>) : "" }
          </div>

          <h3>Platforms</h3>
          <div className={styles.fieldset}>
            { game.platforms.length ? game.platforms.map(({ platform }) => <p>{platform.name}</p>) : "" }
          </div>

          { game.image && <img className={styles.bg} src={game.image}/> }
          <Link to="/home">↩</Link>
        </section>
      )}

    </main>
  )
}

    // genres    : [],
    // id        : "",
    // image     : "",
    // name      : "",
    // platforms : [],
    // rating    : 0,
    // released  : "",

