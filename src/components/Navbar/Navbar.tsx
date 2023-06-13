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
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  toggleCartModal: () => void;
  isCartModal: boolean;
  setIsCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  onRemoveFromCart: () => void;
}

const Navbar: FC<NavbarProps> = ({
  productsData,
  cartIcon,
  cart,
  cartQuantity,
  setCartQuantity,
  cartTotal,
  setCartTotal,
  isCartModal,
  setIsCartModal,
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
          {cartQuantity < 1 ? (
            ""
          ) : (
            <div className="cart-qty-popup">
              <p>{cartQuantity}</p>
            </div>
          )}

          {isCartModal ? (
            <CartModal
              productsData={productsData}
              cart={cart}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              onRemoveFromCart={onRemoveFromCart}
              isCartModal={isCartModal}
              setIsCartModal={setIsCartModal}
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
