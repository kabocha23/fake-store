import { FC, useEffect } from "react";
import Product from "../Product/Product";
import "./Products.css";

interface ProductsProps {
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

const Products: FC<ProductsProps> = ({ productsData }) => {
  return (
    <div className="products-container">
      {productsData.map((productData) => (
        <Product
          key={`key-${productData.id}`}
          prodId={productData.id}
          title={productData.title}
          price={productData.price}
          description={productData.description}
          category={productData.category}
          image={productData.image}
          rating={productData.rating}
        />
      ))}
    </div>
  );
};

export default Products;
