import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [ProductsData, setProductsData] = useState<
    {
      id: string;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }[]
  >([]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main></main>
    </div>
  );
}

export default App;
