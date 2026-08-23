import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mapa", element: <Mapa /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
