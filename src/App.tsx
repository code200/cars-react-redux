import React from 'react';
import CarForm from './components/CarForm';
import CarSearch from './components/CarSearch';
import CarList from './components/CarList';
import CarValue from './components/CarValue';

function App() {
  return (
    <>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue value={1234} />
    </>
  );
}

export default App;
