import { FC } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

interface ProductProps {
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

const ProductPage: FC<ProductProps> = ({ productsData }) => {
  const { id } = useParams();
  let idNum = +id! - 1;
  return (
    <div className="productpage-container">
      <img
        src={productsData[idNum].image}
        alt={productsData[idNum].title}
        className="productpage-image"
      ></img>
      <h1 id="productpage-title">{productsData[idNum].title}</h1>
      <h2 id="productpage-price">${productsData[idNum].price}</h2>
      <h2 id="productpage-rating">{`${productsData[idNum].rating.rate} stars ${productsData[idNum].rating.count} reviews`}</h2>
      <p id="productpage-desc">{productsData[idNum].description}</p>
    </div>
  );
};

export default ProductPage;
