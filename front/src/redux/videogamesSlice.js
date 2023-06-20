import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { VITE_API_ENDPOINT: endpoint } = import.meta.env
const initialState = {
  videogames: [],
  genres: [],
  // searched: [],
  search: "",
}

export const fetchVideogames = createAsyncThunk("videogames/fetch", async (thunkAPI) => {
  const res = await fetch(`${endpoint}/videogames`)
  const data = await res.json()
  return data
})

// export const searchVideogames = createAsyncThunk("videogames/search", async (query, thunkAPI) => {
//   const res = await fetch(`http://localhost:3001/videogames/name?name=${query}`)
//   const data = await res.json()
//   console.log(data)
//   return data
// })



export const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    addVideogames: (state, action) => {
      const { payload: videogames } = action
      state.videogames = videogames
    },
    addSingleVideogame: (state, action) => {
      const { payload: newVideogame } = action
      state.videogames.push(newVideogame)
    },
    addGenres: (state, action) => {
      // const { payload: genres } = action
      // state.genres.push(genres)
    },
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.videogames = action.payload
    })

    // builder.addCase(searchVideogames.fulfilled, (state, action) => {
      // console.log(action.payload)
      // state.searched = action.payload
      // 
    // })
  },
})

export const { addVideogames, addSingleVideogame, addGenres } = videogamesSlice.actions
export default videogamesSlice.reducer
