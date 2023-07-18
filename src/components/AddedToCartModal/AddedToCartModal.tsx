import { FC } from "react";
import { Link } from "react-router-dom";
import "./AddedToCartModal.css";

interface AddedToCartModalProps {
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

const AddedToCartModal: FC<AddedToCartModalProps> = ({
  productsData,
  cart,
  onRemoveFromCart,
  isCartModal,
  setIsCartModal,
}) => {
  return (
    <div className="addedtocartmodal-container">
      <div className="addedtocartmodal-title">
        <p>Item Added To Cart!</p>
      </div>
      <div className="addedtocartmodal-main">
        <div className="addedtocartmodal-product-info">
          <p></p>
        </div>
        <div className="cart-checkout">
          <Link to={`/checkout`}>
            <button id="checkout-btn">
              Checkout {cart.length} {cart.length === 1 ? "item" : "items"}
            </button>
          </Link>
          <Link to={`/checkout`}>
            <button id="go-to-cart-btn">Go to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddedToCartModal;
