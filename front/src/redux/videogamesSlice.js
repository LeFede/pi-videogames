import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videogames: [],
  genres: [],
}

export const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    addVideogames: (state, action) => {
      // const { payload: videogames } = action
      // state.videogames = videogames
    },
    addSingleVideogame: (state, action) => {
      // const { payload: newVideogame } = action
      // state.videogames.push(newVideogame)
    },
    addGenres: (state, action) => {
      // const { payload: genres } = action
      // state.genres.push(genres)
    }
  }
})

export const { addVideogames, addSingleVideogame, addGenres } = videogamesSlice.actions
export default videogamesSlice.reducer
