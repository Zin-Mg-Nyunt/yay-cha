import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      component="form"
      onSubmit={(event) => event.preventDefault()}
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          overflow: "hidden",
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          textAlign: "left",
        }}
      >
        <Box
          sx={{ bgcolor: "banner", px: 3, pt: 4, pb: 3, textAlign: "center" }}
        >
          <Avatar
            sx={{
              width: 72,
              height: 72,
              mx: "auto",
              mb: 1.5,
              bgcolor: "primary.main",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Y
          </Avatar>
          <Typography sx={{ fontSize: 22, fontWeight: 700 }}>YayCha</Typography>
          <Typography sx={{ color: "text.fade", mt: 0.5 }}>
            Welcome back
          </Typography>
        </Box>

        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            autoComplete="email"
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            autoComplete="current-password"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((visible) => !visible)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 1, py: 1.2, fontWeight: 600, textTransform: "none" }}
          >
            Login
          </Button>
          <Typography
            sx={{ textAlign: "center", color: "text.fade", fontSize: 14 }}
          >
            New to YayCha?{" "}
            <Button
              onClick={() => navigate("/signup")}
              sx={{
                p: 0,
                minWidth: 0,
                fontWeight: 600,
                textTransform: "none",
                verticalAlign: "baseline",
              }}
            >
              Create an account
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
