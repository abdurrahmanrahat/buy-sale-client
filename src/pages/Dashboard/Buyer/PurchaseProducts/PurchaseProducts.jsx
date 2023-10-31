import getPurchasesByEmail from "../../../../hooks/getPurchasesByEmail";

const PurchaseProducts = () => {
  const [purchases] = getPurchasesByEmail();
  console.log("purchases", purchases);
  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="text-2xl md:text-4xl 2xl:text-5xl font-semibold mt-6 border-b-2 border-[#9875ff]">
          List of Purchase Products: {purchases?.length}
        </span>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {purchases?.map((purchase, index) => (
              <tr key={index} className=" text-white ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={purchase.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge text-lg">
                      {purchase.productName}
                    </span>
                  </div>
                </td>
                <td className="text-lg">{purchase.sellerName}</td>
                <td className="text-lg">{purchase.productCategory}</td>
                <td className="text-lg text-right">
                  ${purchase?.productPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseProducts;
