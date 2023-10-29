import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Iphone1 from "../../../assets/gallery/iphone1.png";
import Iphone2 from "../../../assets/gallery/iphone2.png";
import Iphone3 from "../../../assets/gallery/iphone3.png";
import Iphone4 from "../../../assets/gallery/iphone4.png";

import Oppo1 from "../../../assets/gallery/oppo1.png";
import Oppo2 from "../../../assets/gallery/oppo2.png";
import Oppo3 from "../../../assets/gallery/oppo3.png";
import Oppo4 from "../../../assets/gallery/oppo4.png";

import Samsung1 from "../../../assets/gallery/samsung1.png";
import Samsung2 from "../../../assets/gallery/samsung2.png";
import Samsung3 from "../../../assets/gallery/samsung3.png";
import Samsung4 from "../../../assets/gallery/samsung4.png";

const GallerySection = () => {
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

      {/* react tab */}
      <div className="px-4 md:px-0">
        <Tabs>
          <TabList>
            <Tab>
              <h4 className="font-semibold">All</h4>
            </Tab>
            <Tab>
              <h4 className="font-semibold">Apple</h4>
            </Tab>
            <Tab>
              <h4 className="font-semibold">Oppo</h4>
            </Tab>
            <Tab>
              <h4 className="font-semibold">Samsung</h4>
            </Tab>
          </TabList>

          {/* All List */}
          <TabPanel>
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
          </TabPanel>

          {/* Apple */}
          <TabPanel>
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
          </TabPanel>

          {/* Oppo */}
          <TabPanel>
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
          </TabPanel>

          {/* Samsung */}
          <TabPanel>
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default GallerySection;
