import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const email = location.state?.email || "";
  const code = location.state?.code || "";

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
        window.alert('Password successfully reset.');
        navigate("/login");
    } else {
      setMessage("Passwords do not match.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* <Typography variant="subtitle1">
          Resetting password for: {email}
        </Typography> */}
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              id="password"
              label="New Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Reset Password
            </Button>
          </form>
          {message && (
            <Typography variant="body2" color="textSecondary" align="center">
              {message}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ResetPassword;
