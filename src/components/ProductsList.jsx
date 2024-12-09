import ProductCard from "./ProductCard";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  return (
    <div className="py-5">
      <header className="pb-5 relative border-b flex justify-between items-center text-[8px] lg:text-2xl">
        <h2 className="font-bold ">
          <span className="relative inline-block">
            Alana Electronics
            <span className="absolute bottom-[-22px] left-0 w-full border-b-4 border-primary-100"></span>
          </span>
          <span className="text-black font-normal">
            {" "}
            (100 Products <span className="text-primary-100">Available</span>)
          </span>
        </h2>
        <span className="flex items-center gap-2">
          <button className="font-medium flex-shrink-0">View All</button>
          <ChevronRight color="#FF8307" />
        </span>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

ProductsList.propTypes = {
    products: PropTypes.array,
    };