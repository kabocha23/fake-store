import { FC } from "react";
import { NavigateFunction, useParams } from "react-router-dom";
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
  navigateRoutes: NavigateFunction;
}

const ProductPage: FC<ProductProps> = ({ productsData, navigateRoutes }) => {
  const { id } = useParams();
  const idNum = +id! - 1;
  return (
    <div className="productpage-container">
      <div className="productpage-back">
        <button onClick={() => navigateRoutes(-1)}>go back</button>
      </div>

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
