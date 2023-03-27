import { FC } from "react";
import "./Navbar.css";

interface NavbarProps {
  cartIcon: string;
}

const Navbar: FC<NavbarProps> = ({ cartIcon }) => {
  return (
    <div className="navbar-container">
      <p>
        <a href="">Sign in</a> or <a href="">register</a>
      </p>
      <div>
        <img src={cartIcon} alt="cart"></img>
      </div>
    </div>
  );
};

export default Navbar;
