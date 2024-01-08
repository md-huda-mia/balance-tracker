import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLauout from "../Pages/MainLayout/MainLauout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Users from "../Pages/Users/Users";
import UserDetalis from "../Pages/Users/UserDetalis";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import SignUp from "../Pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLauout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/users/:id",
        element: <UserDetalis />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
