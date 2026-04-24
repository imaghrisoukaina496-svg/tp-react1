function CarList({ cars }) {
  return (
    <div>
      <h2>Mes véhicules</h2>
      {cars.map((car, index) => (
        <p key={index}>
          {car.brand} {car.model} - {car.color}
        </p>
      ))}
    </div>
  );
}

export default CarList;