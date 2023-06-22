import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styles from "./Single.module.css"

const { VITE_SINGLE_GAME_URL: url, VITE_API_ENDPOINT: endpoint } = import.meta.env
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
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVideogame = async () => {
      const res = await fetch(endpoint + url + params.id)
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
      </>}

      { loading ? <h1>Loading...</h1> : (
        <section className={styles.data}> 
          { game.name && <div className={styles.title}><h1>{game.name}</h1><h3> ~ ({game.rating}⭐)</h3></div> }
          { game.released && <p className={styles.released}>📅 {game.released}</p> }

          { !error && <h3>Genres</h3> }
          <div className={styles.fieldset}>
            { game.genres.length ? game.genres.map(genre => <p key={genre.name}>{genre.name}</p>) : "" }
          </div>

          { !error && <h3>Platforms</h3> }
          <div className={styles.fieldset}>
            { game.platforms.length ? game.platforms.map(({ platform }) => <p key={platform.name}>{platform.name}</p>) : "" }
          </div>

          { game.image && <img className={styles.bg} src={game.image}/> }
          <a onClick={() => navigate(-1)}>↩</a>
        </section>
      )}

    </main>
  )
}

