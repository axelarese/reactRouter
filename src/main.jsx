import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";

// route creation

const router = createBrowserRouter([
  {
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />,
      },
      {
        path : "/about",
        element : <About />,
      },
    ],
  },  
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);