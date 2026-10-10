import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { LightMode, DarkMode, Menu, Notifications } from "@mui/icons-material";
import { useApp } from "../Themed";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { mode, setMode, openDrawer, setOpenDrawer } = useApp();
  const navigate = useNavigate();
  return (
    <AppBar position="static" color={mode === "dark" ? "default" : "primary"}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h5">YayCha</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" onClick={() => navigate("/signin")}>
            Login
          </Button>
          <IconButton color="inherit" aria-label="menu">
            <Notifications />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
              localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
            }}
          >
            {mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
