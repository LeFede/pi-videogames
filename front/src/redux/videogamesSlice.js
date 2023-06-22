import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { VITE_API_ENDPOINT: endpoint } = import.meta.env
const initialState = {
  videogames: [],
  genres: [],
  currentPage: 0,
  sorting: '',
  filtering: 'none',
}

export const fetchVideogames = createAsyncThunk("videogames/fetch", async (thunkAPI) => {
  const res = await fetch(`${endpoint}/videogames`)
  const data = await res.json()
  return data
})

export const fetchGenres = createAsyncThunk("genres/fetch", async (thunkAPI) => {
  const res = await fetch(`${endpoint}/genres`)
  const data = await res.json()
  return data
})


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
      const { payload: genres } = action
      state.genres.push(genres)
    },
    setCurrentPage: (state, action) => {
      const { payload: page } = action
      state.currentPage = page
    },
    setSorting: (state, action) => {
      const { payload: sorting } = action 
      state.sorting = sorting
    },
    setFilter: (state, action) => {
      const { payload: filter } = action
      state.filter = filter
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchVideogames.fulfilled, (state, action) => {
      state.videogames = action.payload
    })

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
    })

  },
})

export const { 
  addVideogames, 
  addSingleVideogame, 
  setCurrentPage,
  setSorting,
  setFilter,
} = videogamesSlice.actions
export default videogamesSlice.reducer
