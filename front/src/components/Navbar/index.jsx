import styles from "./Navbar.module.css"
import add from "@assets/icons/add.svg"
import search from "@assets/icons/search.svg"
import sun from "@assets/icons/sun.svg"
import moon from "@assets/icons/moon.svg"

export const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.search}>
            <label></label>
            <form>
              <label htmlFor="search-name">Search</label>
              <input type="text" name="search" id="search-name" readOnly/>
            </form>
          </li>
          <li className={styles.add}>
            <label></label>
            <form>
              <label htmlFor="name">Add</label>
              <input type="text" id="name" name="name" value="name" readOnly/>
            </form>
          </li>
          <li className={styles.mode}>
          </li>
        </ul>
      </nav>
      <div className={styles.mode}>
        <input type="checkbox" value="mode" id="mode" readOnly/>
        <label htmlFor="mode"></label>
        <div className={styles.bg}></div>
      </div>

    </>
  )
}


        // <li><img src={moon} alt="moon-icon" /></li>
        // <li><img src={sun} alt="sun-icon" /></li>

