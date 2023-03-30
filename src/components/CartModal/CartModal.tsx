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
}

const CartModal: FC<CartModalProps> = ({}) => {
  return <div className="cartmodal-container"></div>;
};

export default CartModal;
