import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer";
import Bg from "../assets/images/bg.jpg";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main class="flex-1" style={{ background: `url(${Bg})` }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
