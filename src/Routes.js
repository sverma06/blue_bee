import {createBrowserRouter} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddProducts from "./components/Products/AddProducts";
import HomePage from "./components/HomePage/HomePage";
import ProductsList from "./components/Products/ProductsList";
import Username from "./components/HomePage/Username";
import ProductPage from "./components/Products/ProductPage";
import Cart from "./components/Header/Cart/Cart";
import RemoveItem from "./components/Header/Cart/RemoveItem";

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
      path: "/products",
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
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/cart/:product_id",
      element: <RemoveItem />
    }
  ]);