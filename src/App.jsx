import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <NavBar onLogin={() => setPage("login")} />
      <SideBar />
      {page === "login" ? (
        <Login onRegister={() => setPage("register")} />
      ) : (
        <Register onLogin={() => setPage("login")} />
      )}
    </div>
  );
}
