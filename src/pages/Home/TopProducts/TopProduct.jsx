import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TopProduct = ({ product }) => {
  const {
    productName,
    productImg,
    productPrice,
    productFeatures,
    productRAM,
    productStorage,
    productWarranty,
    productCamera,
    productPort,
    productRelease,
  } = product;
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg p-4">
      <div className="relative">
        <img
          src={productImg}
          alt={productName}
          className="rounded-lg mx-auto w-64"
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
            <li className="mb-1">{productFeatures.three}</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <p>{productRelease}</p>
        <div className="flex items-center">
          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
