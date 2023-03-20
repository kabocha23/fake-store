import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
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

  useEffect(() => {
    const url: string = "https://fakestoreapi.com/products";
    const productsDataFetch = async (): Promise<void> => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.log(error));
    };
    productsDataFetch();
  }, []);

  const navigateRoutes = useNavigate();

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e) e.preventDefault();
    setCategoryFilter(e.target.value);
  };

  const handleResetCategory = (): void => {
    if (categoryFilter !== "Select Category")
      setCategoryFilter("Select Category");
  };

  const handleSort = (
    sortParam: React.ChangeEvent<HTMLSelectElement>,
    productsArr: {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }[]
  ): void => {
    if (sortParam) sortParam.preventDefault();
    if (sortParam.target.value === "Featured") {
      setProductsData(productsArr.slice().sort((a, b) => a.id - b.id));
    } else if (sortParam.target.value === "price low to high") {
      setProductsData(productsArr.slice().sort((a, b) => a.price - b.price));
    } else if (sortParam.target.value === "price high to low") {
      setProductsData(productsArr.slice().sort((a, b) => b.price - a.price));
    } else if (sortParam.target.value === "rating") {
      setProductsData(
        productsArr.slice().sort((a, b) => b.rating.rate - a.rating.rate)
      );
    } else if (sortParam.target.value === "reviews") {
      setProductsData(
        productsArr.slice().sort((a, b) => b.rating.count - a.rating.count)
      );
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productsData={productsData}
              categoryFilter={categoryFilter}
              handleCategory={handleCategory}
              handleResetCategory={handleResetCategory}
              sortBy={sortBy}
              handleSort={handleSort}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              productsData={productsData}
              navigateRoutes={navigateRoutes}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
