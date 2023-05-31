import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  Slider,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

function Dashboard() {
  const [checked, setChecked] = React.useState(true);
  const [onlineMessage, setOnlineMessage] = React.useState("");

  const [volume, setVolume] = React.useState(0);
  const [volumeMessage, setVolumeMessage] = React.useState("");

  const [qualityValue, setQualityValue] = React.useState(2);
  const [qualityMessage, setQualityMessage] = React.useState("");

  const handleOnlineChange = () => {
    setChecked(!checked);
    if (!checked) {
      setOnlineMessage("");
    } else {
      setOnlineMessage(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }
  };
  const handleVolumeChange = (e, newVolume) => {
    setVolume(newVolume);
    if (newVolume >= 80) {
      setVolumeMessage(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
    } else {
      setVolumeMessage("");
    }
  };

  const handleQualityChange = (e) => {
    setQualityValue(e.target.value);
    if (e.target.value === 1) {
      setQualityMessage(
        "Music quality is degraded. Increase quality if your connection allows it."
      );
    } else {
      setQualityMessage("");
    }
  };

  return (
    <div>
      <div
        id="cardContainer"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ height: "220px" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Online Mode
            </Typography>
            <br />
            <Typography>
              Is this application connected to the internet?
            </Typography>
            <br />
            <Switch
              checked={checked}
              onChange={handleOnlineChange}
              color="secondary"
            />
          </CardContent>
        </Card>
        <Card style={{ height: "220px" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Master Volume
            </Typography>
            <br />
            <Typography>
              Overrides all other sound settings in this application
            </Typography>
            <br />
            <Slider
              defaultValue={30}
              marks={true}
              min={0}
              max={100}
              step={10}
              onChange={handleVolumeChange}
            />
          </CardContent>
        </Card>
        <Card style={{ height: "220px" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Sound Quality
            </Typography>
            <br />
            <Typography>
              Manually control the music quality in event of poor connection
            </Typography>
            <br />
            <FormControl fullWidth>
              <InputLabel id="quality-select-label">Sound Quality</InputLabel>
              <br />
              <Select
                labelId="quality-select-label"
                value={qualityValue}
                onChange={handleQualityChange}
              >
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <h2>System Notifications:</h2>
        {onlineMessage}
        <br />
        {volumeMessage}
        <br />
        {qualityMessage}
      </div>
    </div>
  );
}

export default Dashboard;
