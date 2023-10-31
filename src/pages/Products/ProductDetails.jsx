import { useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { MdSdStorage, MdOutlineRateReview } from "react-icons/md";
import { GiBattery100 } from "react-icons/gi";
import {
  FaTv,
  FaCertificate,
  FaCamera,
  FaCameraRetro,
  FaBuffer,
  FaGalacticRepublic,
} from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  // console.log(product);
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

  return (
    <div className="my-20 mx-4">
      <div>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-2">
          {productName}
        </h2>
        <div className="flex gap-6">
          <p className="text-[#EE9322] font-semibold">{productCategory}</p>
          <p>Last Updated: {productRelease}</p>
        </div>
      </div>

      {/*  */}
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <h4 className="text-xl">Overview</h4>{" "}
          <BsArrowRight className="text-xl mt-1" />
        </div>

        {/* img and other deatils */}
        <div className="md:flex mt-6">
          <div className="md:w-2/5 flex items-center justify-center">
            <img src={productImg} alt={productName} className="rounded-lg" />
          </div>
          <div className="md:w-3/5 mt-8 md:mt-0">
            <h4 className="text-lg 2xl:text-xl font-semibold ">
              Key Specs / Features
            </h4>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* display */}
              <div className="flex gap-2">
                <FaTv className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">Display</p>
                  <p>{productFeatures.one}</p>
                </div>
              </div>
              {/* processor */}
              <div className="flex gap-2">
                <FaCertificate className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">Processor</p>
                  <p>{productFeatures.two}</p>
                </div>
              </div>
              {/* camera */}
              <div className="flex gap-2">
                <FaCameraRetro className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">Camera</p>
                  <p>{productCamera}</p>
                </div>
              </div>
              {/* RAM */}
              <div className="flex gap-2">
                <FaBuffer className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">RAM</p>
                  <p>{productRAM}</p>
                </div>
              </div>
              {/* Storage */}
              <div className="flex gap-2">
                <MdSdStorage className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">Storage</p>
                  <p>{productStorage}</p>
                </div>
              </div>
              {/* Battery */}
              <div className="flex gap-2">
                <GiBattery100 className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">Battery Capacity</p>
                  <p>{productCamera}</p>
                </div>
              </div>
              {/* OS */}
              <div className="flex gap-2">
                <FaGalacticRepublic className="text-[26px] mt-1" />
                <div>
                  <p className="text-[18px]">OS</p>
                  <p>{productPort}</p>
                </div>
              </div>
            </div>

            {/* market status */}
            <div className="flex items-center justify-evenly gap-4 my-6 text-center">
              <div>
                <p>Market Status</p>
                <p className="font-semibold">Released</p>
              </div>
              <div>
                <p>Release Date</p>
                <p className="font-semibold">{productRelease}</p>
              </div>
            </div>

            {/* product details */}
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {productName} Summary
              </h3>
              <p>{productDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* seller details and make ratting */}
      <div className="mt-12 md:flex justify-evenly items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Seller Info</h2>
          <h4 className="font-semibold">{sellerName}</h4>
          <p>{sellerEmail}</p>
          <p>Product Warranty: {productWarranty} years</p>
          <p>Seller Rattings: 2 Stars</p>
        </div>
        <div>
          <button className="text-lg text-[#EE9322] font-semibold">
            <MdOutlineRateReview className="inline-block text-xl" /> Make Your
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
