import { FC, Fragment } from "react";
import { NavigateFunction } from "react-router-dom";
import deleteIcon from "../../images/icon-delete.svg";
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
  cart: { productId: number; productQty: number }[];
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  cartTax: number;
  setCartTax: React.Dispatch<React.SetStateAction<number>>;
  toggleCartModal: () => void;
  isCartModal: boolean;
  setIsCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  onRemoveFromCart: () => void;
}

const Checkout: FC<CheckoutProps> = ({
  productsData,
  navigateRoutes,
  quantity,
  decrementQty,
  incrementQty,
  cart,
  cartQuantity,
  setCartQuantity,
  cartTotal,
  setCartTotal,
  cartTax,
  setCartTax,
  isCartModal,
  setIsCartModal,
  toggleCartModal,
  onRemoveFromCart,
}) => {
  return (
    <div className="checkout-container">
      <div className="checkout-back">
        <button onClick={() => navigateRoutes(-1)}>Back</button>
      </div>
      {cart.map((product) => {
        return (
          <div key={product.productId} className="checkout-product">
            <img
              id="checkout-img"
              src={productsData[product.productId].image}
              alt={productsData[product.productId].title}
            ></img>
            <p id="checkout-name">{productsData[product.productId].title}</p>
            <p id="checkout-price">
              ${productsData[product.productId].price.toFixed(2)}
            </p>
            <p id="checkout-qty"> Qty: {product.productQty}</p>
            <div id="checkout-delete">
              <img
                src={deleteIcon}
                onClick={() => onRemoveFromCart}
                alt="delete"
              ></img>
            </div>
          </div>
        );
      })}
      <div>
        <p>Subtotal: ${cartTotal}</p>
        <p>Taxes: ${(cartTotal * 0.095).toFixed(2)}</p>
        <p>Shipping: ${(7.0).toFixed(2)}</p>
        <p>Total: </p>
      </div>
    </div>
  );
};

export default Checkout;
