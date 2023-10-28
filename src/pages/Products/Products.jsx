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
      <div className="my-24">
        {/* search and filter option */}
        <div className="md:flex text-center md:px-24">
          <div className="input-group pl-14 md:pl-0 pb-4 md:pb-0">
            <input
              type="text"
              placeholder="Search…"
              // ref={searchRef}
              className="input input-bordered rounded-md bg-black"
            />
            <button className="btn btn-square border-none bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <label className="block mb-2 text-lg">
              <span className="">Category</span>
            </label>
            <select className=" px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none">
              <option disabled selected>
                default
              </option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Oppo</option>
            </select>
          </div>
        </div>

        {/* all products list */}
      </div>
    </div>
  );
};

export default Products;
