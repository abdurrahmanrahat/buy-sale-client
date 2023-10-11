import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="bg-gray-900 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
      <div className="flex items-center justify-between relative">
        {/* logo section */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[#EE9322]">Product</span>
            <span className="text-[#9875ff]">Sale</span>
          </h1>
        </Link>

        {/* Nav items section */}
        <ul className="hidden lg:flex space-x-5">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/sellers">Sellers</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/products">Products</ActiveLink>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="lg:hidden">
          {/* toggle open icon */}
          <div onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu className="w-12 h-10 text-[#EE9322] p-2 ms-1 " />
          </div>

          {isOpenMenu && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-gray-950 rounded shadow-sm">
                {/* logo and close toggle icon */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/">
                      <h1 className="text-3xl font-bold">
                        <span className="text-[#EE9322]">Product</span>
                        <span className="text-[#9875ff]">Sale</span>
                      </h1>
                    </Link>
                  </div>
                  <div onClick={() => setIsOpenMenu(false)}>
                    <IoMdClose className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* mobile nav items */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/sellers">Sellers</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink to="/products">Products</ActiveLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        {/* Mobile Navlinks end */}
      </div>
    </div>
  );
};

export default Navbar;
