import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../.././../assets/another/mobile.png";

const GetStarted = () => {
  return (
    <div className="md:flex my-12">
      <div className="md:w-1/2">
        <img src={Image} alt="" />
      </div>

      {/* content */}
      <div className="md:w-1/2 flex  justify-center items-center">
        <div>
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-2">
            Get Started Today!
          </h2>
          <Link to="/register">
            <button className=" bg-[#EE9322] px-5 py-3 rounded-full text-[17px] font-[500] capitalize">
              Sign Me UP <FaAngleRight className="inline-block mb-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
