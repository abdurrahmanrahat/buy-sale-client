import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import getProductsByEmail from "../../../../hooks/getProductsByEmail";

const MyProducts = () => {
  const [products, isLoading] = getProductsByEmail();
  console.log(products);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center mt-6">
        List of Products: {products?.length}
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
            {products.map((product, index) => (
              <tr key={index} className=" text-white ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={product.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge text-lg">{product.productName}</span>
                  </div>
                </td>
                <td className="text-lg">{product.sellerName}</td>
                <td className="text-lg">{product.productCategory}</td>
                <td className="text-lg text-right">${product?.productPrice}</td>
                <td>
                  <Link to={`/dashboard/updateproduct/${product._id}`}>
                    <button className="text-[16px] font-semibold bg-[#EE9322] px-2 py-1 rounded">
                      Update
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

export default MyProducts;
