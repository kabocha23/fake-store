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
  categoryFilter: string;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Products: FC<ProductsProps> = ({
  productsData,
  categoryFilter,
  setCategoryFilter,
  handleSelect,
}) => {
  return (
    <div className="products-container">
      <div className="products-filter">
        <label htmlFor="categorySelect">Filter by: </label>

        <select
          name="categorySelect"
          defaultValue="Select Category"
          id="categorySelector"
          onChange={(e) => handleSelect(e)}
        >
          <option value="Select Category">Select Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </select>
      </div>
      <div className="products-list">
        {productsData
          .filter((product) =>
            categoryFilter === "Select Category"
              ? product.category.length > 0
              : product.category === categoryFilter
          )
          .map((productData) => (
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
    </div>
  );
};

export default Products;
