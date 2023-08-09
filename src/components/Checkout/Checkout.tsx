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
        <button onClick={() => navigateRoutes(-1)}>
          {String.fromCharCode(8592)} Back
        </button>
      </div>
      <hr></hr>
      <div className="checkout-cart-items">
        {cart.length === 0 ? (
          <p id="checkout-no-items-msg">
            You do not have any items in your cart!
          </p>
        ) : (
          cart.map((product) => {
            return (
              <div key={product.productId} className="checkout-product">
                <img
                  id="checkout-img"
                  src={productsData[product.productId].image}
                  alt={productsData[product.productId].title}
                ></img>
                <div className="checkout-details">
                  <p id="checkout-name">
                    {productsData[product.productId].title}
                  </p>
                  <label htmlFor="checkout-qty">Qty: </label>
                  <input id="checkout-qty" value={product.productQty}></input>
                  <div id="checkout-delete">
                    <img
                      src={deleteIcon}
                      onClick={() => onRemoveFromCart}
                      alt="delete"
                    ></img>
                  </div>
                  <p id="checkout-price">
                    ${productsData[product.productId].price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="checkout-totals">
        <p>Subtotal: ${cartTotal.toFixed(2)}</p>
        <p>Taxes: ${(cartTotal * 0.095).toFixed(2)}</p>
        <p>Shipping: ${(7.0).toFixed(2)}</p>
        <p>Total: ${(cartTotal + cartTotal * 0.095 + 7.0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Checkout;
