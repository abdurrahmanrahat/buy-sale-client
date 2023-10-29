import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    _id,
    productName,
    productCategory,
    productImg,
    productPrice,
    productFeatures,
    productRAM,
    productStorage,
    productWarranty,
    productCamera,
    productPort,
    productRelease,
    productRatting,
    productDescription,
    productUpcomingFeature,
    sellerEmail,
    sellerName,
  } = product;

  // handle product buy function
  const handleProductBuy = () => {
    if (user && user.email) {
      // console.log(product);

      const cartProduct = {
        buyerName: user.displayName,
        buyerEmail: user.email,
        productId: _id,
        productName,
        productCategory,
        productImg,
        productPrice,
        productFeatures,
        productRAM,
        productStorage,
        productWarranty,
        productCamera,
        productPort,
        productRelease,
        productRatting,
        productDescription,
        productUpcomingFeature,
        sellerEmail,
        sellerName,
      };

      // send cart product to db
      fetch("http://localhost:5000/cartproducts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Product add to cart.");
          }
        });
    } else {
      Swal.fire({
        title: "Please login to buy products",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg p-4 md:p-8 mx-8 md:mx-0">
      <div className="relative">
        <img
          src={productImg}
          alt={productName}
          className="rounded-lg mx-auto w-56"
        />
        <p className="absolute top-2 right-2 text-black bg-white p-1 font-semibold rounded-lg">
          ${productPrice}
        </p>
      </div>
      <h2 className="font-semibold text-2xl mt-2 text-center">{productName}</h2>

      <div className="my-2 flex justify-center items-center">
        <div>
          <h4 className="font-semibold">Features:</h4>
          <ul className="list-disc list-inside pl-4">
            <li className="mb-1">{productFeatures.one}</li>
            <li className="mb-1">{productFeatures.two}</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <button
          onClick={handleProductBuy}
          className="text-[18px] font-semibold bg-[#9875ff] px-4 py-1 rounded"
        >
          Buy
        </button>
        <div className="flex items-center">
          <Link to={`/products/${_id}`}>
            <button className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
