import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddProducts from "./components/Products/AddProducts";
import HomePage from "./components/HomePage/HomePage";
import ProductsList from "./components/Products/ProductsList";
import Username from "./components/HomePage/Username";
import ProductPage from "./components/Products/ProductPage";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/addProducts",
      element: <AddProducts />,
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/products",
      element: <ProductsList />
    },
    {
      path: "/currentUser",
      element: <Username />
    },
    {
      path: "/products/:id",
      element: <ProductPage />
    },
  ]);