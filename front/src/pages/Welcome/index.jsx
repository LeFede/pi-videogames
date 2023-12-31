import { NavLink } from "react-router-dom"

import styles from "./Welcome.module.css"
import video from "@assets/video/ds.mp4"

export const Welcome = () => {

  return (
    <main className={styles.main}>
      <video className={styles.video} autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4"/>
      </video>
      <NavLink className={styles.press_any_key} to="/videogames">Click to continue</NavLink>
    </main>
  )
}


