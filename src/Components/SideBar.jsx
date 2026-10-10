import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Home,
  Person,
  Logout,
  Close as CloseIcon,
  PersonAdd,
} from "@mui/icons-material";
import { useApp } from "../Themed";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const { openDrawer, setOpenDrawer } = useApp();
  const navigate = useNavigate();
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Box
        sx={{
          position: "relative",
          height: 140,
          width: 300,
          marginBottom: 5,
          bgcolor: "banner",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 10,
            bottom: -20,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            sx={{
              width: 70,
              height: 70,
              color: "white",
              bgcolor: "primary.main",
            }}
          />
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            John Doe
          </Typography>
        </Box>
        <IconButton
          onClick={() => setOpenDrawer(false)}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon
            sx={{
              fontSize: 20,
              color: "text.fade",
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Box>
      <List>
        <ListItem
          button
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/logout")}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
