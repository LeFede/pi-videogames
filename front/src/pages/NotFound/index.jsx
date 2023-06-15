import { useRouteError, Link } from "react-router-dom";
import notFound from "@assets/404.png"
import styles from "./NotFound.module.css"

export const NotFound = () => {
  const error = useRouteError()

  return (
    <main className={styles.container}>
      <img src={notFound}/>
      <h1>404</h1>
      <p>Page's in another castle</p>
      <Link to="/home">Go back</Link>
    </main>
  )
}

      // <p>{error.statusText || error.message}</p>

