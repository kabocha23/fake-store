import { FC } from "react";
import "./AddToCart.css";

interface ProductProps {
  quantity: number;
  decrementQty: React.MouseEventHandler<HTMLButtonElement>;
  incrementQty: React.MouseEventHandler<HTMLButtonElement>;
  onAddToCart: (itemId: number, quantity: number) => void;
  cartIcon: string;
  idNum: number;
}

const AddToCart: FC<ProductProps> = ({
  quantity,
  decrementQty,
  incrementQty,
  onAddToCart,
  cartIcon,
  idNum,
}) => {
  return (
    <div className="productpage-addtocart">
      <div className="addToCart-counter">
        <button onClick={decrementQty} disabled={quantity === 1}>
          <span className="addToCart-counter-change">-</span>
        </button>
        <span className="addToCart-count">{quantity}</span>
        <button onClick={incrementQty}>
          <span className="addToCart-counter-change">+</span>
        </button>
      </div>
      <div className="addToCart-submit">
        <button
          onClick={() => onAddToCart(idNum, quantity)}
          disabled={quantity === 0}
        >
          <img src={cartIcon} alt="cart"></img>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
