import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Checkout from "./components/Checkout/Checkout";
import cartIcon from "./images/icon-cart.svg";
import "./App.css";

function App() {
  // state
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
  const [quantity, setQuantity] = useState<number>(1);
  const [lastAddedId, setLastAddedId] = useState<number>(0);
  const [cart, setCart] = useState<{ productId: number; productQty: number }[]>(
    []
  );
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartTax, setCartTax] = useState<number>(0);
  const [isCartModal, setIsCartModal] = useState(false);
  const [addedToCartModal, setAddedToCartModal] = useState(false);
  // end state

  // component lifecycle side effects
  useEffect(() => {
    const productsURL: string = "https://fakestoreapi.com/products";
    const productsDataFetch = async (): Promise<void> => {
      await fetch(productsURL)
        .then((res) => res.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.log(error));
    };

    productsDataFetch();
    getCartTotals();
  }, [quantity]);
  // end component lifecycle side effects

  // routes
  const navigateRoutes = useNavigate();
  // end routes

  // functions
  const toggleCartModal = () => {
    setIsCartModal(!isCartModal);
  };

  const toggleAddedToCartModal = () => {
    setAddedToCartModal(!addedToCartModal);
  };

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
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQty = (): void => {
    setQuantity(quantity + 1);
  };

  const onAddToCart = (id: number, quantity: number): void => {
    setLastAddedId(id);
    let tempCart = cart;
    if (tempCart.length === 0) {
      setCart([{ productId: id, productQty: quantity }]);
      setQuantity(1);
      getCartTotals();
      return;
    } else {
      for (let i = 0; i < tempCart.length; i++) {
        if (tempCart[i].productId === id) {
          tempCart[i].productQty += quantity;
          setCart(tempCart);
          setQuantity(1);
          getCartTotals();
          return;
        }
      }
      tempCart.push({ productId: id, productQty: quantity });
      setCart(tempCart);
      setQuantity(1);
      getCartTotals();
    }
  };

  const onRemoveFromCart = () => {};

  const getCartTotals = (): void => {
    let tempCartQuantity: number = 0,
      tempCartTotal: number = 0;
    for (const product of cart) {
      tempCartQuantity += product.productQty;
      tempCartTotal +=
        productsData[product.productId].price * product.productQty;
    }
    setCartQuantity(tempCartQuantity);
    setCartTotal(tempCartTotal);
  };
  // end functions

  // render
  return (
    <div className="App">
      <header className="home-header">
        <Navbar
          productsData={productsData}
          cartIcon={cartIcon}
          cart={cart}
          toggleCartModal={toggleCartModal}
          isCartModal={isCartModal}
          setIsCartModal={setIsCartModal}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          onRemoveFromCart={onRemoveFromCart}
        />
      </header>
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
              setQuantity={setQuantity}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              productsData={productsData}
              navigateRoutes={navigateRoutes}
              quantity={quantity}
              decrementQty={decrementQty}
              incrementQty={incrementQty}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              productsData={productsData}
              navigateRoutes={navigateRoutes}
              quantity={quantity}
              decrementQty={decrementQty}
              incrementQty={incrementQty}
              cart={cart}
              toggleCartModal={toggleCartModal}
              isCartModal={isCartModal}
              setIsCartModal={setIsCartModal}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              cartTax={cartTax}
              setCartTax={setCartTax}
              onRemoveFromCart={onRemoveFromCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
