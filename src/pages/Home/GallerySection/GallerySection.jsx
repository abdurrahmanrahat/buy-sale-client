import Iphone1 from "../../../assets/gallery/iphone1.png";
import Iphone2 from "../../../assets/gallery/iphone2.png";
import Iphone3 from "../../../assets/gallery/iphone3.png";
import Iphone4 from "../../../assets/gallery/iphone4.png";

import Oppo1 from "../../../assets/gallery/oppo1.png";
import Oppo2 from "../../../assets/gallery/oppo2.png";
import Oppo3 from "../../../assets/gallery/oppo3.png";
import Oppo4 from "../../../assets/gallery/oppo4.png";

import { useState } from "react";
import Samsung1 from "../../../assets/gallery/samsung1.png";
import Samsung2 from "../../../assets/gallery/samsung2.png";
import Samsung3 from "../../../assets/gallery/samsung3.png";
import Samsung4 from "../../../assets/gallery/samsung4.png";

const GallerySection = () => {
  const [activeBtn, setActiveBtn] = useState("apple");
  return (
    <div className="mt-20 mb-12">
      <div className="text-center md:px-28 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Popular Gallery
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
          delectus eum est odio consequatur eligendi iste similique, excepturi
          fugiat voluptatem vitae quam repellendus exercitationem eaque illo
          nisi laborum tempore! Atque!
        </p>
      </div>

      {/* button here */}
      <div className="flex justify-center items-center gap-1 md:gap-4">
        <button
          className={`text-[12px] md:text-[18px] font-semibold bg-[#EE9322] w-[80px] md:w-[100px] hover:bg-black hover:text-[#ddd] duration-700 py-[6px] rounded border border-transparent hover:border-white ${
            activeBtn === "all" && "bg-white text-[#000]"
          }`}
          onClick={() => setActiveBtn("all")}
        >
          All
        </button>

        <button
          className={`text-[12px] md:text-[18px] font-semibold bg-[#EE9322] w-[80px] md:w-[100px] hover:bg-black hover:text-[#ddd] duration-700 py-[6px] rounded border border-transparent hover:border-white ${
            activeBtn === "apple" && "bg-white text-[#000]"
          }`}
          onClick={() => setActiveBtn("apple")}
        >
          Apple
        </button>

        <button
          className={`text-[12px] md:text-[18px] font-semibold bg-[#EE9322] w-[80px] md:w-[100px] hover:bg-black hover:text-[#ddd] duration-700 py-[6px] rounded border border-transparent hover:border-white ${
            activeBtn === "oppo" && "bg-white text-[#000]"
          }`}
          onClick={() => setActiveBtn("oppo")}
        >
          Oppo
        </button>

        <button
          className={`text-[12px] md:text-[18px] font-semibold bg-[#EE9322] w-[80px] md:w-[100px] hover:bg-black hover:text-[#ddd] duration-700 py-[6px] rounded border border-transparent hover:border-white ${
            activeBtn === "samsung" && "bg-white text-[#000]"
          }`}
          onClick={() => setActiveBtn("samsung")}
        >
          Samsung
        </button>
      </div>

      <div className="px-4 md:px-0">
        {/* all photo */}
        <div>
          {activeBtn === "all" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
                <div>
                  <img src={Iphone1} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Iphone2} className="rounded-md" alt="" />
                </div>

                <div>
                  <img src={Iphone4} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo2} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo3} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo1} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo2} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo3} className="rounded-md" alt="" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* apple photo */}
        <div>
          {activeBtn === "apple" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
                <div>
                  <img src={Iphone1} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Iphone2} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Iphone3} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Iphone4} className="rounded-md" alt="" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* oppo photo */}
        <div>
          {activeBtn === "oppo" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
                <div>
                  <img src={Oppo1} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo2} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo3} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Oppo4} className="rounded-md" alt="" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* samsung photo */}
        <div>
          {activeBtn === "samsung" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
                <div>
                  <img src={Samsung1} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Samsung2} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Samsung3} className="rounded-md" alt="" />
                </div>
                <div>
                  <img src={Samsung4} className="rounded-md" alt="" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
