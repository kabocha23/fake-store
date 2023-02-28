import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  const [productsData, setProductsData] = useState<
    {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }[]
  >([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const productsDataFetch = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.log(error));
    };

    productsDataFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Products productsData={productsData} />
      </main>
    </div>
  );
}

export default App;
