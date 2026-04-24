import Header from "./Header";
import ProfileCard from "./ProfileCard";
import CarList from "./CarList";
import GrocerySection from "./GrocerySection";

function App() {
  const user = {
    name: "Soukaina",
    role: "Étudiante en React",
    image: "/user.png"
  };

  const cars = [
    { brand: "Audi", model: "Q8", color: "Rouge" },
    { brand: "Volkswagen", model: "T-Roc", color: "Blanche" },
    { brand: "BMW", model: "Serie 3", color: "Noire" }
  ];

  const groceries = {
    fruits: ["Ananas", "Pêches", "Fraise"],
    dairy: ["Milk", "Cheese", "Butter", "Miel"]
  };

  return (
    <div>
      <Header title="Mon Dashboard 🚀" />
      <ProfileCard user={user} />
      <CarList cars={cars} />
      <GrocerySection data={groceries} />
    </div>
  );
}

export default App;