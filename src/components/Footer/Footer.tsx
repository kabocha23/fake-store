import { FC } from "react";
import FbIcon from "../../images/icon-facebook.svg";
import TwIcon from "../../images/icon-twitter.svg";
import PiIcon from "../../images/icon-pinterest.svg";
import IgIcon from "../../images/icon-instagram.svg";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-header">
          <div className="footer-header-brand"></div>
          <div className="footer-header-contacts">
            <a>
              <img src={FbIcon} alt="facebook-icon" />
            </a>
            <a>
              <img src={TwIcon} alt="twitter-icon" />
            </a>
            <a>
              <img src={PiIcon} alt="pinterest-icon" />
            </a>
            <a>
              <img src={IgIcon} alt="instagram-icon" />
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="footer-body">
          <div className="footer-body-sub">
            <ul>
              <li className="foot-sub-head">
                <a>Buy</a>
              </li>
              <li>
                <a>Registration</a>
              </li>
              <li>
                <a>Bidding & buying help</a>
              </li>
              <li>
                <a>Stores</a>
              </li>
              <li>
                <a>Charity</a>
              </li>
              <li>
                <a>Seasonal Sales and events</a>
              </li>
            </ul>
          </div>
          <div className="footer-body-sub">
            <ul>
              <li className="foot-sub-head">
                <a>Sell</a>
              </li>
              <li>
                <a>Start selling</a>
              </li>
              <li>
                <a>How to sell</a>
              </li>
              <li>
                <a>Business sellers</a>
              </li>
              <li>
                <a>Affiliates</a>
              </li>
            </ul>
          </div>
          <div className="footer-body-sub">
            <ul>
              <li className="foot-sub-head">
                <a>About Fake Store</a>
              </li>
              <li>
                <a>Company info</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Investors</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Diversity & Inclusion</a>
              </li>
              <li>
                <a>Global Impact</a>
              </li>
              <li>
                <a>Government Relations</a>
              </li>
              <li>
                <a>Advertise with us</a>
              </li>
              <li>
                <a>Policies</a>
              </li>
            </ul>
          </div>
          <div className="footer-body-sub">
            <ul>
              <li className="foot-sub-head">
                <a>Help & Contact</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Terms of use</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Cookies</a>
              </li>
              <li>
                <a>Returns</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
