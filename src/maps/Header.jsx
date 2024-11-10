import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function Header({ minMag, setMinMag, timespan, setTimespan }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{ bgcolor: "#000000" }}>
          <Toolbar variant="regular">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              USGS Earthquakes
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{ bgcolor: "#ffffff" }}>
          <Toolbar variant="regular">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: 1,
                height: "90px",
              }}
            >
              <Typography
                variant="subtitle4"
                sx={{ color: "#000000", padding: "3px" }}
              >
                Select Magnitude
              </Typography>
              <Stack direction="row" spacing={1}>
                <ToggleButtonGroup
                  value={minMag}
                  exclusive
                  onChange={(event, newMinMag) => {
                    if (newMinMag !== null) setMinMag(newMinMag);
                  }}
                  aria-label="Magnitude Filter"
                >
                  <ToggleButton value="all" aria-label="All">
                    All
                  </ToggleButton>
                  <ToggleButton value="1.0" aria-label="M1.0+">
                    M1.0+
                  </ToggleButton>
                  <ToggleButton value="2.5" aria-label="M2.5+">
                    M2.5+
                  </ToggleButton>
                  <ToggleButton value="4.5" aria-label="M4.5+">
                    M4.5+
                  </ToggleButton>
                  <ToggleButton value="significant" aria-label="Significant">
                    Significant
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", height: "90px" }}
            >
              <Typography
                variant="subtitle4"
                sx={{ color: "#000000", padding: "3px", ml: 1 }}
              >
                Select Time Period
              </Typography>
              <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                <ToggleButtonGroup
                  value={timespan}
                  exclusive
                  onChange={(event, newTimespan) => {
                    if (newTimespan !== null) setTimespan(newTimespan);
                  }}
                  aria-label="Timespan Filter"
                >
                  <ToggleButton value="hour" aria-label="Last Hour">
                    Last Hour
                  </ToggleButton>
                  <ToggleButton value="day" aria-label="Last Day">
                    Last Day
                  </ToggleButton>
                  <ToggleButton value="week" aria-label="Last 7 Days">
                    Last 7 Days
                  </ToggleButton>
                  <ToggleButton
                    value="month"
                    aria-label="Last 30 Days"
                    disabled={minMag === "all" || minMag === "1.0"}
                  >
                    Last 30 Days
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
