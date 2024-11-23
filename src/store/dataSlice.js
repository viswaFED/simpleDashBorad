import { createSlice } from '@reduxjs/toolkit';

// Initial state structure of the data slice
const initialState = {
  data: [  // Array holding the main data
    { id: 1, category: 'A', x: 10, y: 20, size: 30 },
    { id: 2, category: 'B', x: 15, y: 25, size: 50 },
    { id: 3, category: 'C', x: 20, y: 10, size: 20 },
    { id: 4, category: 'A', x: 30, y: 40, size: 70 },
    { id: 5, category: 'B', x: 25, y: 15, size: 40 },
  ],
  filteredData: [],  // Array holding the filtered data, initially empty
  selectedBubble: null,  // To store the currently selected bubble, initially null
};

// Create the slice using createSlice from Redux Toolkit
const dataSlice = createSlice({
  name: 'data',  
  initialState,  // Set the initial state defined above
  reducers: {
    // Action to filter the data based on the payload
    filterData: (state, action) => {
      // Filter the data array based on the given criteria in the payload
      state.filteredData = state.data.filter((item) =>
        Object.entries(action.payload).every(
          // For each key-value pair in the payload, check if the item matches the value
          ([key, value]) => value.includes(item[key]) || value === null
        )
      );
    },
    
    // Action to select a specific bubble (filter data by selected bubble ID)
    selectBubble: (state, action) => {
      // Filter the data to only include the selected bubble by ID
      state.filteredData = state.data.filter(
        (item) => item.id === action.payload
      );
    },
    
    // Action to reset any filters and return the original data
    resetFilter: (state) => {
      // Reset filtered data back to the original state
      state.filteredData = state.data;
    },
  },
});

// Export actions so they can be used in components
export const { filterData, selectBubble, resetFilter } = dataSlice.actions;

export default dataSlice.reducer;
