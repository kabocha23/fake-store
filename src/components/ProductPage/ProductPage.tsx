import { FC, useEffect } from "react";
import { NavigateFunction, useParams } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductPage.css";

interface ProductProps {
  productsData: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];
  navigateRoutes: NavigateFunction;
  quantity: number;
  decrementQty: React.MouseEventHandler<HTMLButtonElement>;
  incrementQty: React.MouseEventHandler<HTMLButtonElement>;
  onAddToCart: (itemId: number, quantity: number) => void;
  cartIcon: string;
}

const ProductPage: FC<ProductProps> = ({
  productsData,
  navigateRoutes,
  quantity,
  decrementQty,
  incrementQty,
  onAddToCart,
  cartIcon,
}) => {
  const { id } = useParams();
  const idNum = +id! - 1;
  return (
    <div className="productpage-container">
      <div className="productpage-back">
        <button onClick={() => navigateRoutes(-1)}>Back</button>
      </div>

      <div className="productpage-main">
        <div className="productpage-image">
          <img
            src={productsData[idNum].image}
            alt={productsData[idNum].title}
          ></img>
        </div>

        <div className="productpage-details">
          <h1 id="productpage-title">{productsData[idNum].title}</h1>
          <h2 id="productpage-price">${productsData[idNum].price}</h2>
          <h2 id="productpage-rating">{`${productsData[idNum].rating.rate} stars ${productsData[idNum].rating.count} reviews`}</h2>
          <p id="productpage-desc">{productsData[idNum].description}</p>
          <AddToCart
            quantity={quantity}
            decrementQty={decrementQty}
            incrementQty={incrementQty}
            onAddToCart={onAddToCart}
            cartIcon={cartIcon}
            idNum={idNum}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
