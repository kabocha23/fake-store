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
  const [categoryFilter, setCategoryFilter] =
    useState<string>("Select Category");
  const [sortBy, setSortBy] = useState<string>("none");
  const [sortedProductsData, setSortedProductsData] = useState<{}[]>([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const productsDataFetch = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.log(error));
    };
    productsDataFetch();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e) e.preventDefault();
    setCategoryFilter(e.target.value);
  };

  const handleSort = (
    sortParam: string,
    productsArr: {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }[]
  ) => {
    if (sortParam === "price low to high") {
      return productsArr.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (sortParam === "price high to low") {
      return productsArr.sort((a, b) => (a.price > b.price ? -1 : 1));
    } else if (sortParam === "rating") {
      return productsArr.sort((a, b) =>
        a.rating.rate > b.rating.rate ? -1 : 1
      );
    } else if (sortParam === "reviews") {
      return productsArr.sort((a, b) =>
        a.rating.count > b.rating.count ? -1 : 1
      );
    }
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
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortedProductsData={sortedProductsData}
          setSortedProductsData={setSortedProductsData}
          handleSort={handleSort}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
