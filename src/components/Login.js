import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/music/");
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username *"
          variant="standard"
          fullWidth
          size="small"
          margin="normal"
        />
        <TextField
          label="Password *"
          variant="standard"
          fullWidth
          type="password"
          size="small"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
