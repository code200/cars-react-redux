import { createSlice, nanoid } from '@reduxjs/toolkit';

interface Car {
  id: number;
  name: string;
  cost: number;
}

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [] as Car[],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assume: action.payload is an object with this shape: {name: string, cost: number}
      state.cars.push({
        id: Number(nanoid()),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      // Assume: action.payload === id of car to remove.
      const index = state.cars.findIndex(car => car.id === action.payload);
      if (index !== -1) state.cars.splice(index, 1);
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
