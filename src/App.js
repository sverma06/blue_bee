import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AddProducts from "./components/Products/AddProducts";
import HomePage from "./components/HomePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
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
    path: "/logout",
    element: <HomePage />
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
