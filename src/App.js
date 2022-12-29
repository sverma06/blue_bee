import "./App.css";
import Sighnup from "./components/Sighnup/Sighnup";
import Login from "./components/Login/Login";
import AddProducts from "./components/Products/AddProducts";
import HomePage from "./components/HomePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./components/Products/Products";




const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Sighnup />,
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
