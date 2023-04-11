import { FC } from "react";
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
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  onRemoveFromCart: () => void;
}

const CartModal: FC<CartModalProps> = ({
  productsData,
  cart,
  cartTotal,
  onRemoveFromCart,
}) => {
  return (
    <div className="cart-modal-container">
      <div className="cart-title">
        <p>Cart</p>
      </div>
      <div className="cart-main">
        {cart.length === 0 ? (
          <p id="empty-cart-msg">Your cart is empty</p>
        ) : (
          <div className="cart-has-products">
            <div className="cart-products">
              {cart.map((product) => {
                return (
                  <div className="cart-each-product">
                    <p key={product.productId} id="cart-product-name">
                      {productsData[product.productId].title}
                    </p>
                    <p id="cart-product-qty"> x{product.productQty}</p>
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
            <div className="cart-checkout">
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
