import React from 'react';

function CarForm() {
  return (
    <>
      <form>
        <label htmlFor="car_name">Car Name</label>
        <input type="text" name="car_name" />
        <label htmlFor="car_value">Car Value</label>
        <input type="text" name="car_value" />
      </form>
    </>
  );
}

export default CarForm;
