import { Outlet } from "react-router-dom";
import MainBar from "@/components/MainBar"

function Layout() {
  return (
    <>
      <header>
        <MainBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout