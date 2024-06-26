import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BsCartCheck } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import DarkMoodToggle from "../../../components/DarkMoodToggle/DarkMoodToggle";
import getCartProductsByEmail from "../../../hooks/getCartProductsByEmail";
import isSellerUser from "../../../hooks/isSellerUser";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSeller] = isSellerUser();

  const [cartProducts] = getCartProductsByEmail();
  // console.log(cartProducts);

  // user logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("User logout successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="bg-gray-900 text-white w-full">
      <div className="px-4 py-5 max-w-[1280px] max-xl:max-w-[1320px] mx-auto md:px-0">
        <div className="flex items-center justify-between relative">
          {/* logo section */}
          <Link to="/">
            <h1 className="text-3xl font-bold">
              <span className="text-[#EE9322]">Product</span>
              <span className="text-[#9875ff]">Sale</span>
            </h1>
          </Link>

          {/* Nav items section */}
          <ul className="hidden lg:flex space-x-5 text-[18px]">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/sellers">Sellers</ActiveLink>
            </li>
            {isSeller && (
              <li>
                <ActiveLink to="/addProduct">Add Product</ActiveLink>
              </li>
            )}
            <li>
              <ActiveLink to="/dashboard">Dashboard</ActiveLink>
            </li>
            <li className="text-[22px] relative">
              <ActiveLink to="/dashboard/cart">
                <BsCartCheck />
              </ActiveLink>
              <span className="absolute -top-[14px] -right-[10px] font-semibold text-[18px] text-[#EE9322]">
                {cartProducts ? cartProducts.length : 0}
              </span>
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
                        <ActiveLink to="/products">Products</ActiveLink>
                      </li>
                      <li>
                        <ActiveLink to="/sellers">Sellers</ActiveLink>
                      </li>
                      {isSeller && (
                        <li>
                          <ActiveLink to="/addProduct">Add Product</ActiveLink>
                        </li>
                      )}
                      <li>
                        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
                      </li>
                      <li className="text-[22px] relative">
                        <ActiveLink to="/dashboard/cart">
                          <BsCartCheck />
                        </ActiveLink>
                        <span className="absolute -top-[14px] left-[24px] font-semibold text-[18px] text-[#EE9322]">
                          {cartProducts ? cartProducts.length : 0}
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Navlinks end */}

          {/* button working */}
          <div className="md:flex items-center gap-4">
            <div className="hidden md:block">
              <DarkMoodToggle></DarkMoodToggle>
            </div>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="text-[18px] font-semibold bg-[#EE9322] px-4 py-2 rounded">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
