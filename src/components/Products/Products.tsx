import { FC, useEffect } from "react";
import ProductTile from "../ProductTile/ProductTile";
import { Link } from "react-router-dom";
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
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleResetCategory: React.MouseEventHandler<HTMLButtonElement> | undefined;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  handleSort: (
    sortParam: string,
    productsArr: {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }[]
  ) => void;
}

const Products: FC<ProductsProps> = ({
  productsData,
  categoryFilter,
  setCategoryFilter,
  handleCategory,
  handleResetCategory,
  sortBy,
  setSortBy,
  handleSort,
}) => {
  return (
    <div className="products-container">
      <div className="products-filter">
        <label htmlFor="categorySelect">Filter by: </label>

        <select
          name="categorySelect"
          value={categoryFilter}
          id="categorySelector"
          onChange={(e) => handleCategory(e)}
        >
          <option value="Select Category">Select Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </select>
        <button onClick={handleResetCategory}>Reset</button>
      </div>
      <div className="products-sort">
        <label htmlFor="sortSelect">Sort by: </label>

        <select
          name="sortSelect"
          value={sortBy}
          id="sortSelect"
          onChange={(e) => handleSort(e.target.value, productsData)}
        >
          <option value="Featured">Featured</option>
          <option value="price low to high">Price: low to high</option>
          <option value="price high to low">Price: high to low</option>
          <option value="rating">Rating</option>
          <option value="reviews">Reviews</option>
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
            <Link to={`/product/${productData.id}`}>
              <ProductTile
                key={`key-${productData.id}`}
                prodId={productData.id}
                title={productData.title}
                price={productData.price}
                description={productData.description}
                category={productData.category}
                image={productData.image}
                rating={productData.rating}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
