import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function Template() {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
    </>
  );
}
