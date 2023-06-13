import styles from "./Videogame.module.css"

export const Videogame = (data) => {
  const { name, image, rating } = data

  const star = (i) => <span key={i}>⭐</span> 
  const greyStar = (i) => <span key={i} className={styles.gray}>⭐</span> 

  return (
    <article className={styles.article}>
      <header>
        <h2>{name}</h2>
        <span>
          {Array.from({length: 5}).map((_, i) => ~~rating > i ? star(i) : greyStar(i))}
          ({rating})
        </span>
      </header>
      <img src={image}/>
    </article>
  )
}
