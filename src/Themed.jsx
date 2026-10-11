import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Show from "./Pages/Show";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/show/:id",
        element: <Show />,
      },
    ],
  },
]);

export default function Themed() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: deepPurple[500],
          light: deepPurple[100],
          dark: deepPurple[700],
        },
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: mode === "dark" ? grey[500] : grey[600],
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            "html, body": {
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
            },
          },
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          mode,
          setMode,
          openDrawer,
          setOpenDrawer,
          openForm,
          setOpenForm,
        }}
      >
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
