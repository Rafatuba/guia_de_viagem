import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";
import Rota from "./pages/Rota";
import Custos from "./pages/Custos";
import Checklist from "./pages/Checklist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "mapa", element: <Mapa /> },
      { path: "rota", element: <Rota /> },
      { path: "custos", element: <Custos /> },
      { path: "checklist", element: <Checklist /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
