import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import cartIcon from "./images/icon-cart.svg";
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
  const [quantity, setQuantity] = useState<number>(0);
  const [cart, setCart] = useState<{ [itemId: number]: number }[]>([]);

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
    setSortBy(sortParam.target.value);
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

  const decrementQty = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQty = (): void => {
    setQuantity(quantity + 1);
  };

  const onAddToCart = (id: number, quantity: number): void => {
    let tempCart = cart;
    if (tempCart.length === 0) {
      setCart([{ [id]: quantity }]);
      setQuantity(0);
      return;
    } else {
      for (let i = 0; i < tempCart.length; i++) {
        if (tempCart[i].hasOwnProperty(id)) {
          tempCart[i][id] += quantity;
          setCart(tempCart);
          setQuantity(0);
          return;
        }
      }
      tempCart.push({ [id]: quantity });
      setCart(tempCart);
      setQuantity(0);
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
              cartIcon={cartIcon}
              cart={cart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              productsData={productsData}
              navigateRoutes={navigateRoutes}
              cartIcon={cartIcon}
              quantity={quantity}
              decrementQty={decrementQty}
              incrementQty={incrementQty}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
