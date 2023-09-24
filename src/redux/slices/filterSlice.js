import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryID: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categoryID = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFilter(state, action) {
      state.pageCount = Number(action.payload.pageCount);
      state.categoryID = Number(action.payload.categoryID);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategories, setSort, setPageCount, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
