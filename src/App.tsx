import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
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
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const productsDataFetch = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.log(error));
    };
    console.log(productsData);
    productsDataFetch();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e) e.preventDefault();
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Products
          productsData={productsData}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          handleSelect={handleSelect}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
