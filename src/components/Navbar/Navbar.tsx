import { FC } from "react";
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
  toggleCartModal: () => void;
}

const Navbar: FC<NavbarProps> = ({
  cartIcon,
  cart,
  cartTotal,
  toggleCartModal,
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
          <img src={cartIcon} alt="cart" onClick={toggleCartModal}></img>
          {cartTotal < 1 ? (
            ""
          ) : (
            <div className="cart-qty-popup">
              <p>{cartTotal}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
