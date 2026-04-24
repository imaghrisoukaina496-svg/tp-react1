function GrocerySection({ data }) {
  return (
    <div>
      <h2>🛒 Courses</h2>

      <h3>Fruits</h3>
      <ul>
        {data.fruits.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Produits laitiers</h3>
      <ul>
        {data.dairy.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default GrocerySection;