import { FC } from "react";
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
  cart: { [key: number]: number }[];
}

const CartModal: FC<CartModalProps> = ({ productsData, cart }) => {
  return <div className="cartmodal-container"></div>;
};

export default CartModal;
