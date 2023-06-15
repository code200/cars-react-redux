import React from 'react';

interface CarValueProps {
  value: number;
}

const CarValue: React.FC<CarValueProps> = ({ value }) => {
  return <>{value}</>;
};

export default CarValue;
