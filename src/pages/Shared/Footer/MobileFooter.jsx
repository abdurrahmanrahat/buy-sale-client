import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-[#072953] p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 text-[#072953] text-md font-semibold px-4 py-2 text-left hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>INFORMATION</span>
                <FaAngleDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul className="list">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Driver safety</li>
                  <li>Contact us</li>
                  <li>Terms of use</li>
                  <li>Privacy Policy</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 text-[#072953] text-md font-semibold px-4 py-2 text-left   hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>CONTAINER TRANSPORT</span>
                <FaAngleDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul className="list">
                  <li>Convenience</li>
                  <li>Location</li>
                  <li>Live Unloads</li>
                  <li>Side Loader Drops</li>
                  <li>Imports and Exports</li>
                  <li>50T Onsite Forklift</li>
                  <li>Oversize, Overweight</li>
                  <li>Dangerous Goods</li>
                  <li>24/7 Operations</li>
                  <li>Company Owned Fleet</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 text-[#072953] text-md font-semibold px-4 py-2 text-left  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Complete warehousing solutions</span>
                <FaAngleDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul className="list">
                  <li>Short & Long Term</li>
                  <li>Indoor & Outdoor Storage</li>
                  <li>Racked, Dry & Floor Stacked</li>
                  <li>Distribution</li>
                  <li>Import, Unpack, Pack, Ship</li>
                  <li>Sub-Leasing</li>
                  <li>Secure Facilities</li>
                  <li>Barcode Scanning</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default MobileFooter;
