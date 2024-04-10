import { Link, Outlet } from "react-router-dom";
import getCartProductsByEmail from "../hooks/getCartProductsByEmail";
import isAdminUser from "../hooks/isAdminUser";
import isBuyerUser from "../hooks/isBuyerUser";
import isSellerUser from "../hooks/isSellerUser";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";

const Dashboard = () => {
  const [cartProducts] = getCartProductsByEmail();

  const [isSeller] = isSellerUser();
  const [isBuyer] = isBuyerUser();
  const [isAdmin] = isAdminUser();

  // console.log(isBuyer);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay md:hidden"
        ></label>
        <div className="menu p-4 w-64 min-h-full bg-gray-900">
          {/* Sidebar content here */}
          <div className="pt-8">
            <Link to="/">
              <h2 className="text-[32px] font-bold">
                <span className="text-[#EE9322]">Product</span>
                <span className="text-[#9875ff]">Sale</span>
              </h2>
            </Link>
            <h2 className="text-[16px] font-semibold mt-4 ml-6">
              {isAdmin && "Admin Dashboard"}
              {isSeller && "Seller Dashboard"}
              {isBuyer && "Buyer Dashboard"}
            </h2>
          </div>

          <ul className="text-[18px] my-10 space-y-0">
            {isAdmin && (
              <>
                <li>
                  <ActiveLink to={"/dashboard/products-manage"}>
                    Products Manage
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to={"/dashboard/users-manage"}>
                    Users Management
                  </ActiveLink>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <ActiveLink to={"/dashboard/myproducts"}>
                    My Products
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to={"/dashboard/addproduct"}>
                    Add Product
                  </ActiveLink>
                </li>
              </>
            )}

            {isBuyer && (
              <>
                <li className="relative">
                  <ActiveLink to={"/dashboard/cart"}>My Cart</ActiveLink>
                  <span className="absolute top-0 left-[70px] font-semibold text-[18px] text-[#9875ff]">
                    {cartProducts ? cartProducts.length : 0}
                  </span>
                </li>
                <li>
                  <ActiveLink to={"/dashboard/purchase-products"}>
                    Purchase Products
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to={"/dashboard/payment-history"}>
                    Payment History
                  </ActiveLink>
                </li>
              </>
            )}

            <li>
              <ActiveLink to={"/"}>Home</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
