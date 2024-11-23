import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; 

// Create the Redux store
const store = configureStore({
  reducer: {
    // The 'data' key in the store holds the dataReducer that manages the data slice
    data: dataReducer,
  },
});

export default store;