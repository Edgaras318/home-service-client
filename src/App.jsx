import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AbousUs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Root from "./Root";
import Category from "./pages/Category/Category";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/search/:category",
        element: <Category />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
