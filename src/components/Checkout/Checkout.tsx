import { FC } from "react";
import { NavigateFunction } from "react-router-dom";
import "./Checkout.css";

interface CheckoutProps {
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
}

const Checkout: FC<CheckoutProps> = ({
  productsData,
  navigateRoutes,
  quantity,
  decrementQty,
  incrementQty,
}) => {
  return (
    <div className="checkout-container">
      <div className="checkout-back">
        <button onClick={() => navigateRoutes(-1)}>Back</button>
      </div>

      <div className="checkout-main">
        <div className="checkout-image">
          <img src={productsData[0].image} alt={productsData[0].title}></img>
        </div>

        <div className="checkout-details">
          <h1 id="checkout-title">{productsData[0].title}</h1>
          <h2 id="checkout-price">${productsData[0].price}</h2>
          <h2 id="checkout-rating">{`${productsData[0].rating.rate} stars ${productsData[0].rating.count} reviews`}</h2>
          <p id="checkout-desc">{productsData[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
