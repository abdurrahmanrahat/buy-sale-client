import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import "./Footer.css";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-[1280px] max-xl:max-w-[1320px] mx-auto">
        <div className="footer-div hidden px-8 md:px-20 pt-16 pb-10 text-white md:flex justify-between">
          {/* information */}
          <div>
            <h4 className="text-[18px] font-[500] mb-5">INFORMATION</h4>
            <ul className="list">
              <li>About us</li>
              <li>Careers</li>
              <li>Driver safety</li>
              <li>Contact us</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* CONTAINER TRANSPORT */}
          <div>
            <h4 className="text-[18px] font-[500] mb-5">CONTAINER TRANSPORT</h4>
            <ul className="list">
              <li>Convenience</li>
              <li>Location</li>
              <li>Live Unloads</li>
              <li>Side Loader Drops</li>
              <li>Imports and Exports</li>
              <li>Dangerous Goods</li>
              <li>24/7 Operations</li>
            </ul>
          </div>

          {/* Complete warehousing solutions */}
          <div>
            <h4 className="text-[18px] font-[500] mb-5">
              Complete warehousing solutions
            </h4>
            <ul className="list">
              <li>Short & Long Term</li>
              <li>Indoor & Outdoor Storage</li>
              <li>Distribution</li>
              <li>Import, Unpack, Pack, Ship</li>
              <li>Sub-Leasing</li>
              <li>Secure Facilities</li>
              <li>Barcode Scanning</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="md:hidden w-full bg-[#072953] px-4 pb-12 pt-16">
          <MobileFooter></MobileFooter>

          <hr className="my-4" />

          <h4 className="uppercase text-center text-white text-lg font-semibold">
            Social Media
          </h4>
          <div className="text-white flex gap-8 justify-center mt-2 text-2xl">
            <FaFacebook />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaWhatsappSquare />
          </div>

          <hr className="my-4" />

          <p className="text-center text-white pt-4">
            © 2014 Swift Transport. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
