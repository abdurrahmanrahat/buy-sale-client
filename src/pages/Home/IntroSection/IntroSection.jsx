import {
  FaBook,
  FaFilm,
  FaStarHalfAlt,
  FaCartPlus,
  FaRocketchat,
  FaCartArrowDown,
} from "react-icons/fa";

const IntroSection = () => {
  return (
    <div className="lg:flex lg:space-x-12 items-center bg-gray-900 text-white p-5 my-12">
      {/* image */}
      <div>
        <img
          src="https://i.ibb.co/gTjgZvt/under-banner.png"
          className="rounded-t-full rounded-s-full"
          alt=""
        />
      </div>

      {/* content */}
      <div className="space-y-5">
        <p className="text-sm  text-yellow-300 font-bold ">
          Purpose of Community
        </p>

        <h1 className="text-3xl font-bold">
          The best E-commerce Platform for All
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas omnis
          rerum rem, assumenda quae ab a quidem neque quibusdam numquam?
        </p>

        <div className="grid lg:grid-cols-2 gap-5 pt-4">
          <div>
            <div>
              <FaCartPlus className="text-yellow-300 text-3xl "></FaCartPlus>
            </div>

            <h1 className="text-2xl font-bold">Products Buy</h1>
            <p>You can buy products that you need as your daily ongoing</p>
          </div>

          <div>
            <div>
              <FaCartArrowDown className="text-red-500 text-3xl"></FaCartArrowDown>
            </div>

            <h1 className="text-2xl font-bold ">Products Sale</h1>
            <p>
              Sellers can uplode their valuable products in there to sale
            </p>
          </div>
          <div>
            <div>
              <FaRocketchat className="text-pink-500 text-3xl"></FaRocketchat>
            </div>

            <h1 className="text-2xl font-bold ">Chat With Seller</h1>
            <p>Before confirming to buy product, you can discuss with seller</p>
          </div>
          <div>
            <div>
              <FaStarHalfAlt className="text-[#9875ff] text-3xl "></FaStarHalfAlt>
            </div>

            <h1 className="text-2xl font-bold ">Review a Product</h1>
            <p>
              There also contain an opportunity to review your buying products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
