import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { id: 1, category: 'A', x: 10, y: 20, size: 30 },
    { id: 2, category: 'B', x: 15, y: 25, size: 50 },
    { id: 3, category: 'C', x: 20, y: 10, size: 20 },
    { id: 4, category: 'A', x: 30, y: 40, size: 70 },
    { id: 5, category: 'B', x: 25, y: 15, size: 40 },
  ],
  filteredData: [],
  selectedBubble: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.filteredData = state.data.filter((item) =>
        Object.entries(action.payload).every(
          ([key, value]) => value.includes(item[key]) || value === null
        )
      );
    },
    selectBubble: (state, action) => {
      state.filteredData = state.data.filter(
        (item) => item.id === action.payload
      );
    },
    resetFilter: (state) => {
      state.filteredData = state.data;
    },
  },
});

export const { filterData, selectBubble, resetFilter } = dataSlice.actions;
export default dataSlice.reducer;
