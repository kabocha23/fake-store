import { FC } from "react";
import ProductTile from "../ProductTile/ProductTile";
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
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleResetCategory: React.MouseEventHandler<HTMLButtonElement> | undefined;
  sortBy: string;
  handleSort: (
    sortParam: React.ChangeEvent<HTMLSelectElement>,
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
  handleCategory,
  handleResetCategory,
  sortBy,
  handleSort,
}) => {
  return (
    <div className="products-container">
      <div className="products-dropdowns">
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
          <button onClick={handleResetCategory}>Clear Filter</button>
        </div>
        <div className="products-sort">
          <label htmlFor="sortSelect">Sort by: </label>

          <select
            name="sortSelect"
            value={sortBy}
            id="sortSelector"
            onChange={(e) => handleSort(e, productsData)}
          >
            <option value="Featured">Featured</option>
            <option value="price low to high">Price: low to high</option>
            <option value="price high to low">Price: high to low</option>
            <option value="rating">Rating</option>
            <option value="reviews">Reviews</option>
          </select>
        </div>
      </div>

      <div className="products-list">
        {productsData
          .filter((product) =>
            categoryFilter === "Select Category"
              ? product.category.length > 0
              : product.category === categoryFilter
          )
          .map((productData) => (
            <ProductTile
              key={`key-${productData.id}`}
              prodId={productData.id}
              title={productData.title}
              price={productData.price}
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
