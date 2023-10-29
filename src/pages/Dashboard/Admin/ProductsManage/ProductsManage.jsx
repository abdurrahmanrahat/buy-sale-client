import toast from "react-hot-toast";
import useProducts from "../../../../hooks/useProducts";

const ProductsManage = () => {
  const [products, refetch] = useProducts();

  // handle product delete
  const handleProductDelete = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product delete successfully.");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center mt-6">
        List of All Products: {products?.length}
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
            {products?.map((product, index) => (
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
                  <button
                    onClick={() => handleProductDelete(product)}
                    className="text-[16px] font-semibold bg-[#EE9322] px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManage;
