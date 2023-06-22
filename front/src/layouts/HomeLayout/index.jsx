import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@components";
import { fetchVideogames, fetchGenres } from "@redux"

export const HomeLayout = () => {
  const { videogames, genres } = useSelector(state => state)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchGenres())
    if (videogames.length) return
    dispatch(fetchVideogames())

  }, [])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

      // <Footer />

