import { FC } from "react";
import "./ProductTile.css";

interface ProductProps {
  prodId: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductTile: FC<ProductProps> = ({
  title,
  price,
  description,
  image,
  rating,
}) => {
  return (
    <div className="producttile-container">
      <img src={image} alt={title} className="producttile-image"></img>
      <h1 id="producttile-title">{title}</h1>
      <h2 id="producttile-price">${price}</h2>
      <h2 id="producttile-rating">{`${rating.rate} stars ${rating.count} reviews`}</h2>
      <p id="producttile-desc">{description}</p>
    </div>
  );
};

export default ProductTile;
