import { Link } from "react-router-dom";
import Image from "../.././../assets/another/mobile.png";
import { FaAngleRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="flex my-8">
      <div className="md:w-1/2">
        <img src={Image} alt="" />
      </div>

      {/* content */}
      <div className="md:w-1/2 flex  justify-center items-center">
        <div>
          <h2 className="text-[48px] font-bold">Get Started Today!</h2>
          <Link to="/register">
            <button className="uppercase bg-[#F9C900] px-5 py-3 rounded-full text-[17px] font-[500]">
              Sign Me UP <FaAngleRight className="inline-block mb-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
