import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "news/fetchNews",
  async ({ category, pageNumber }) => {
    const API_KEY = `uDupV_KWp9WnwmIvQbymDdyRzFQCKm5gm1MO1ICWfVbxp1gK`;
    const url = `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}&category=${category}&page_number=${pageNumber}&page_size=10`;
    const response = await fetch(url);
    return response.json();
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "regional",
    page: 1,
    loading: false,
    data: null,
    errors: null,
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.errors = action.payload;
    });
  },
});

export const { changeCategory, changePage } = categorySlice.actions;
export default categorySlice.reducer;
