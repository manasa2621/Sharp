import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const EnterCode = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code) {
      // Navigate to ResetPassword with email and code as state
      navigate("/reset-password", { state: { email, code } });
    } else {
      setMessage("Please enter the verification code.");
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
            Enter Verification Code
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              required
              id="code"
              label="Verification Code"
              name="code"
              autoFocus
              value={code}
              onChange={handleCodeChange}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Verify Code
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

export default EnterCode;
