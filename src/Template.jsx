import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import ScrollToTop from "./Components/ScrollTop";

export default function Template() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Container maxWidth="sm" sx={{ mt: 8 }}>
          <ScrollToTop />
          <Outlet />
        </Container>
      </main>
    </>
  );
}
