import { FC } from "react";
import Navbar from "../Navbar/Navbar";
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

const Home: FC<ProductsProps> = ({
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
    <div>
      <header className="home-header">
        <Navbar />
      </header>
      <main>
        <Products
          productsData={productsData}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          handleCategory={handleCategory}
          handleResetCategory={handleResetCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          handleSort={handleSort}
        />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
