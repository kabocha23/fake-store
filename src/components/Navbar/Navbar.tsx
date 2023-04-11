import { FC } from "react";
import CartModal from "../CartModal/CartModal";
import "./Navbar.css";

interface NavbarProps {
  productsData: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];
  cartIcon: string;
  cart: { productId: number; productQty: number }[];
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  toggleCartModal: () => void;
  isCartModal: boolean;
  onRemoveFromCart: () => void;
}

const Navbar: FC<NavbarProps> = ({
  productsData,
  cartIcon,
  cart,
  cartTotal,
  setCartTotal,
  isCartModal,
  toggleCartModal,
  onRemoveFromCart,
}) => {
  return (
    <div className="navbar-container">
      <div id="navbar-logo">
        <p>
          <span>fake</span>Store
        </p>
      </div>
      <div className="navbar-right-group">
        <div id="navbar-login">
          <p>
            <a href="">Sign in</a> or <a href="">register</a>
          </p>
        </div>

        <div id="navbar-cart-box">
          <img
            src={cartIcon}
            alt="cart"
            onClick={toggleCartModal}
            id="cart-icon"
          ></img>
          {cartTotal < 1 ? (
            ""
          ) : (
            <div className="cart-qty-popup">
              <p>{cartTotal}</p>
            </div>
          )}

          {isCartModal ? (
            <CartModal
              productsData={productsData}
              cart={cart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              onRemoveFromCart={onRemoveFromCart}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
