import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { deepPurple, grey } from "@mui/material/colors";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export default function Themed() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  const [openDrawer, setOpenDrawer] = useState(false);

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
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ mode, setMode, openDrawer, setOpenDrawer }}>
        <App />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
