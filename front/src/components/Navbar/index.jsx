import { useDispatch, useSelector } from "react-redux"
import styles from "./Navbar.module.css"
import { setSearch } from "@redux"

import { AddGameForm } from "@components/AddGameForm"
import { useState } from "react"

const defaultSearch = ""

export const Navbar = () => {

  const { search } = useSelector(state => state)
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState(defaultSearch)

  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(setSearch(searchText))
  }
  
  const handleChange = (event) => {
    const { value } = event.target
    setSearchText(value)
  }
  
  const resetSearch = (event) => {
    dispatch(setSearch(""))
    setSearchText("")
  }

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.search}>
            <label tabIndex={"0"}></label>
            <form onSubmit={handleSearch}>
              <h3>Search videogame</h3>

              <label htmlFor="search-name">Search</label>
              <input onChange={handleChange} type="text" name="search" id="search-name" value={searchText} />
              <input type="submit" value="Search"/>
              <input type="submit" onClick={resetSearch} value="Reset search"/>
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

