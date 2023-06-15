import { configureStore } from '@reduxjs/toolkit';
import { changeName, changeCost, formReducer } from './slices/formSlice';
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export { store, changeName, changeCost };
