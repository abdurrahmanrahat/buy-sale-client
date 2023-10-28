import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../pages/Shared/Navbar/ActiveLink";
import isSellerUser from "../hooks/isSellerUser";
import isBuyerUser from "../hooks/isBuyerUser";

const Dashboard = () => {
  const [isSeller] = isSellerUser();
  const [isBuyer] = isBuyerUser();

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
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-64 min-h-full bg-gray-900">
          {/* Sidebar content here */}
          <div>
            <Link to="/">
              <h2 className="text-3xl font-bold">
                <span className="text-[#EE9322]">Product</span>
                <span className="text-[#9875ff]">Sale</span>
              </h2>
            </Link>
          </div>

          <ul className="text-[18px] my-10 space-y-0">
            <li>
              <ActiveLink to={"/"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/dashboard/myproducts"}>My Products</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/dashboard/addproduct"}>Add Product</ActiveLink>
            </li>
            {isSeller && (
              <li>
                <ActiveLink to={"/dashboard/addproduct"}>Seller</ActiveLink>
              </li>
            )}
            {isBuyer && (
              <li>
                <ActiveLink to={"/dashboard/addproduct"}>buyer</ActiveLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
