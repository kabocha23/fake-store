import { FC } from "react";
import "./Product.css";

interface ProductProps {
  prodId: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Product: FC<ProductProps> = ({
  title,
  price,
  description,
  image,
  rating,
}) => {
  return (
    <div className="product-container">
      <img src={image} alt={title} className="product-image"></img>
      <h1 id="product-title">{title}</h1>
      <h2 id="product-price">${price}</h2>
      <h2 id="product-rating">{`${rating.rate} stars ${rating.count} reviews`}</h2>
      <p id="product-desc">{description}</p>
    </div>
  );
};

export default Product;
