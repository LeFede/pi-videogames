import styles from "./Navbar.module.css"

import { AddGameForm } from "@components/AddGameForm"

export const Navbar = () => {

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.search}>
            <label tabIndex={"0"}></label>
            <form>
              <h3>Search videogame</h3>

              <label htmlFor="search-name">Search</label>
              <input type="text" name="search" id="search-name" readOnly/>
            </form>
          </li>
          <li className={styles.add}>
            <label tabIndex={"0"}></label>
            <AddGameForm />
          </li>
        </ul>
      </nav>
      <div className={styles.mode}>
        <input type="checkbox" value="mode" id="mode" readOnly/>
        <label tabIndex={"0"} htmlFor="mode"></label>
        <div className={styles.bg}></div>
      </div>

    </>
  )
}


        // <li><img src={moon} alt="moon-icon" /></li>
        // <li><img src={sun} alt="sun-icon" /></li>

