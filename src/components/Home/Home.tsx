import { FC, useEffect } from "react";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import "./Home.css";

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
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Home: FC<ProductsProps> = ({
  productsData,
  categoryFilter,
  handleCategory,
  handleResetCategory,
  sortBy,
  handleSort,
  setQuantity,
}) => {
  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <div>
      <main>
        <Products
          productsData={productsData}
          categoryFilter={categoryFilter}
          handleCategory={handleCategory}
          handleResetCategory={handleResetCategory}
          sortBy={sortBy}
          handleSort={handleSort}
        />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
