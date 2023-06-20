import { useNavigate } from "react-router-dom"
import styles from "./Videogame.module.css"

export const Videogame = (data) => {
  
  const navigate = useNavigate()

  const { name, image, rating, id } = data

  const star = (i) => <span key={i}>⭐</span> 
  const greyStar = (i) => <span key={i} className={styles.gray}>⭐</span> 

  const handleNavigate = () => {
    navigate(`/videogames/${id}`)
  }

  return (
    <article className={styles.article} onClick={handleNavigate}>
      <header>
        <p>{name}</p>
        <span>
          {Array.from({length: 5}).map((_, i) => ~~rating > i ? star(i) : greyStar(i))}
          ({rating})
        </span>
      </header>
      <img src={image}/>
    </article>
  )
}
