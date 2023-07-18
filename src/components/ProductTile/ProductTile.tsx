import { FC } from "react";
import { Link } from "react-router-dom";
import "./ProductTile.css";

interface ProductProps {
  prodId: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductTile: FC<ProductProps> = ({
  prodId,
  title,
  price,
  image,
  rating,
}) => {
  return (
    <div className="producttile-container">
      <Link to={`/product/${prodId}`}>
        <div className="producttile-image">
          <img src={image} alt={title}></img>
        </div>
      </Link>
      <Link to={`/product/${prodId}`}>
        <h1 id="producttile-title">{title}</h1>
      </Link>
      <h2 id="producttile-rating">{`${rating.rate} stars ${rating.count} reviews`}</h2>
      <h2 id="producttile-price">${price.toFixed(2)}</h2>
    </div>
  );
};

export default ProductTile;
