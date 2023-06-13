import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@components";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

      // <Footer />

