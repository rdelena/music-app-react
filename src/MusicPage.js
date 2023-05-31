import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function MusicPage() {
  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "10%", marginRight: "10%" }}>Welcome User!</h1>
      <Dashboard />
    </div>
  );
}

export default MusicPage;
