import Main from "./layout/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePosts, { loader as postLoader } from "./pages/HomePosts";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      id: "root",
      children: [
        {
          index: true,
          element: <HomePosts />,
          loader: postLoader,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
