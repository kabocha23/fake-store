import { FC, useEffect } from "react";
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
  useEffect(() => {
    console.log(productsData);
  }, []);
  return (
    <div className="products-container">
      <header>This is the Products header</header>
      <main>
        {productsData.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <h2></h2>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Products;
