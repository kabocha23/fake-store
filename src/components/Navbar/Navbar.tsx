import { FC } from "react";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <div className="navbar-container">
      <p>
        <a href="">Sign in</a> or <a href="">register</a>
      </p>
      <a>cart placeholder</a>
    </div>
  );
};

export default Navbar;
