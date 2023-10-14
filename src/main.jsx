import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider";
import ThemeProvider from "./provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <div className="">
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
