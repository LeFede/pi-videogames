import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";

import styles from "./Welcome.module.css"
import video from "@assets/video/ds.mp4"
import { fetchVideogames } from "@redux";

export const Welcome = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideogames())
  }, [])

  return (
    <main className={styles.main}>
      <video className={styles.video} autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4"/>
      </video>
      <NavLink className={styles.press_any_key} to="/home">Click to continue</NavLink>
    </main>
  )
}


