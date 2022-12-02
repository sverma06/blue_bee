import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddProducts from "./components/Products/AddProducts";
import HomePage from "./components/HomePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./components/Products/Products";
import Username from "./components/HomePage/Username";
import SingleProduct from "./components/Products/SingleProduct";
import Profile from "./components/Header/Profile";




const router = createBrowserRouter([
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
    element: <Products />
  },
  {
    path: "/currentUser",
    element: <Username />
  },
  {
    path: "products/product",
    element: <SingleProduct />
  },
  {
    path: "home/profile",
    element: <Profile />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
