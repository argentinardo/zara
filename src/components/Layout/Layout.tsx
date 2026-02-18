import { Outlet } from "react-router-dom";
import MainBar from "@/components/MainBar"

function Layout() {
  return (
    <>
      <MainBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout