import { Outlet } from "react-router-dom";
import MenuNav from "../components/MenuNav";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen ml-3 mr-3 mt-3">
      <Header />
      <main>
        <Outlet />
      </main>
      <MenuNav />
    </div>
  );
}
