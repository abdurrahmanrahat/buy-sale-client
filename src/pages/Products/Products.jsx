import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {/* Page Banner Design */}
      <div className="products-page-div h-[140px] md:h-[250px] 2xl:h-[280px] bg-[#000000c7] opacity-60 flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-1">
          Buy Your desire products
        </h2>
        <p className="text-lg 2xl:text-xl">
          <Link
            to="/"
            className="cursor-pointer hover:text-[#EE9322] duration-300"
          >
            Home
          </Link>{" "}
          <span className="font-semibold">/</span> Products
        </p>
      </div>
      
      {/* Page Content Start */}
      Products
    </div>
  );
};

export default Products;
