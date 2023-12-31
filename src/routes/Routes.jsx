import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Sellers from "../pages/Sellers/Sellers";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/Dashboard/DashboardHome";
import MyProducts from "../pages/Dashboard/Seller/MyProducts/MyProducts";
import UpdateProduct from "../pages/Dashboard/Seller/UpdateProduct/UpdateProduct";
import MyCart from "../pages/Dashboard/Buyer/MyCart/MyCart";
import PurchaseProducts from "../pages/Dashboard/Buyer/PurchaseProducts/PurchaseProducts";
import UsersManage from "../pages/Dashboard/Admin/UsersManage/UsersManage";
import ProductsManage from "../pages/Dashboard/Admin/ProductsManage/ProductsManage";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/Buyer/Payment/Payment";
import PayHistory from "../pages/Dashboard/Buyer/PayHistory/PayHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://device-market-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/sellers",
        element: <Sellers></Sellers>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      // admin route
      {
        path: "/dashboard/users-manage",
        element: <UsersManage></UsersManage>,
      },
      {
        path: "/dashboard/products-manage",
        element: <ProductsManage></ProductsManage>,
      },

      // seller route
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://device-market-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },

      // buyer route
      {
        path: "/dashboard/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/purchase-products",
        element: <PurchaseProducts></PurchaseProducts>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PayHistory></PayHistory>,
      },
    ],
  },
]);

export default router;
