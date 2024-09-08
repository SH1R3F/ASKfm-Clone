import ErrorPage from "./routes/error";
import Signup from "./routes/auth/signup";
import Layout from "./layout/default";
import Auth from "./layout/auth";
import Index from "./routes/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
];

export default routes;
