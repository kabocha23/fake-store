import { FC } from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../images/icon-delete.svg";
import "./CartModal.css";

interface CartModalProps {
  productsData: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];
  cart: { productId: number; productQty: number }[];
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  onRemoveFromCart: () => void;
  isCartModal: boolean;
  setIsCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal: FC<CartModalProps> = ({
  productsData,
  cart,
  cartQuantity,
  cartTotal,
  onRemoveFromCart,
  isCartModal,
  setIsCartModal,
}) => {
  return (
    <div className="cart-modal-container">
      <div className="cart-title">
        <p>Your Cart</p>
      </div>
      <div className="cart-main">
        {cart.length === 0 ? (
          <p id="empty-cart-msg">Your cart is empty</p>
        ) : (
          <div className="cart-has-products">
            <div className="cart-products">
              {cart.map((product) => {
                return (
                  <div key={product.productId} className="cart-each-product">
                    <p id="cart-product-name">
                      {productsData[product.productId].title}
                    </p>
                    <p id="cart-product-price">
                      ${productsData[product.productId].price.toFixed(2)}
                    </p>
                    <p id="cart-product-qty"> Qty: {product.productQty}</p>
                    <div id="cart-product-delete">
                      <img
                        src={deleteIcon}
                        onClick={() => onRemoveFromCart}
                        alt="delete"
                      ></img>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="cart-product-subtotal">
              <p>
                Total: <span>${cartTotal}</span>
              </p>
            </div>
            <div className="cart-checkout">
              <Link to={`/checkout`}>
                <button id="checkout-btn">Checkout</button>
              </Link>
              <Link to={`/checkout`}>
                <button id="go-to-cart-btn">Go to Cart</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
