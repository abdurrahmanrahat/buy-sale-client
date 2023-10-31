import { Link } from "react-router-dom";
import getCartProductsByEmail from "../../../../hooks/getCartProductsByEmail";

const MyCart = () => {
  const [cartProducts] = getCartProductsByEmail();
  return (
    <div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center mt-6">
        List of Products: {cartProducts?.length}
      </h2>

      {/* Table Here */}
      <div className="overflow-x-auto my-10">
        <table className="table shadow-lg text-white text-lg ">
          {/* head */}
          <thead className="py-2">
            <tr className="bg-gray-900 text-white text-lg">
              <th className="py-4">#</th>
              <th className="text-left">Photo</th>
              <th className="text-left">Product Name</th>
              <th className="text-left">Seller Name</th>
              <th className="text-left">Category</th>
              <th className="text-right pe-4">Price</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((cartProduct, index) => (
              <tr key={index} className=" text-white ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={cartProduct.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge text-lg">
                      {cartProduct.productName}
                    </span>
                  </div>
                </td>
                <td className="text-lg">{cartProduct.sellerName}</td>
                <td className="text-lg">{cartProduct.productCategory}</td>
                <td className="text-lg text-right">
                  ${cartProduct?.productPrice}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/dashboard/payment",
                      state: cartProduct.productPrice,
                    }}
                  >
                    <button className="text-[16px] font-semibold bg-[#EE9322] px-2 py-1 rounded">
                      Payment
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
