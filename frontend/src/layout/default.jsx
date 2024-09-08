import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
