import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@components";
import { fetchVideogames } from "@redux"

export const HomeLayout = () => {
  const { videogames } = useSelector(state => state)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (videogames.length) return
    dispatch(fetchVideogames())
    setLoading(false)
  }, [])

  return (
    <>
      <Navbar />
      <Outlet loading={loading}/>
    </>
  )
}

      // <Footer />

