import CountUp from "react-countup";
import "./CountParallax.css";

const CountParallax = () => {
  return (
    <div className="parallax-img bg-fixed mt-28">
      <div className="bg-black opacity-60 py-14 text-white p-12 md:p-24 grid grid-cols-1 md:grid-cols-4 gap-12 ">
        <div className="bg-[#141211] flex flex-col p-4 items-center justify-center hover:border duration-300 hover:border-[#FFAE27]">
          <h4 className="text-[56px] font-bold text-[#FFAE27] -mb-4">
            <CountUp start={1} end={73} duration={3} />+
          </h4>
          <h2 className="text-[30px] font-semibold mb-2">Products</h2>
        </div>
        <div className="bg-[#141211] flex flex-col p-4 items-center justify-center hover:border duration-300 hover:border-[#FFAE27]">
          <h4 className="text-[56px] font-bold text-[#FFAE27] -mb-4">
            <CountUp start={1} end={117} duration={3} />+
          </h4>
          <h2 className="text-[30px] font-semibold mb-2">Sellers</h2>
        </div>
        <div className="bg-[#141211] flex flex-col p-4 items-center justify-center hover:border duration-300 hover:border-[#FFAE27]">
          <h4 className="text-[56px] font-bold text-[#FFAE27] -mb-4">
            <CountUp start={1} end={32} duration={3} />+
          </h4>
          <h2 className="text-[30px] font-semibold mb-2">Reviews</h2>
        </div>
        <div className="bg-[#141211] flex flex-col p-4 items-center justify-center hover:border duration-300 hover:border-[#FFAE27]">
          <h4 className="text-[56px] font-bold text-[#FFAE27] -mb-4">
            <CountUp start={1} end={13} duration={3} />+
          </h4>
          <h2 className="text-[30px] font-semibold mb-2">Countries</h2>
        </div>
      </div>
    </div>
  );
};

export default CountParallax;
