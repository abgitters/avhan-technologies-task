import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const RouteArr = [
  {
    image: "/dashboard-route-images/dashboad.png",
    data: "Dashboard",
    path: "/",
  },
  {
    image: "/dashboard-route-images/voice.png",
    data: "Voice",
    path: "voice",
  },
  {
    image: "/dashboard-route-images/email.png",
    data: "Mail",
    path: "mail",
  },
  {
    image: "/dashboard-route-images/library.png",
    data: "Library",
    path: "library",
  },
  {
    image: "/dashboard-route-images/location.png",
    data: "Location",
    path: "location",
  },
  {
    image: "/dashboard-route-images/reports.png",
    data: "Reports",
    path: "reports",
  },
  {
    image: "/dashboard-route-images/media-traffic.png",
    data: "Media Traffic",
    path: "media-traffic",
  },
  {
    image: "/dashboard-route-images/chat.png",
    data: "Chat",
    path: "chat",
  },
  {
    image: "/dashboard-route-images/social-media.png",
    data: "Social Media",
    path: "social-media",
  },
  {
    image: "/dashboard-route-images/calender.png",
    data: "Calender",
    path: "calender",
  },

  {
    image: "/dashboard-route-images/team-massage.png",
    data: "Team Massaging",
    path: "team-massaging",
  },
  {
    image: "/dashboard-route-images/sevices.png",
    data: "Services",
    path: "services",
  },
];

const RouteComp = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          mx: { xs: 2, md: 0 },
        }}
      >
        {Array.isArray(RouteArr) &&
          RouteArr.map((val, i) => {
            return (
              <Grid item key={i} sx={{ py: 1 }}>
                <Grid container flexDirection="column" alignItems="center">
                  <img
                    src={val?.image}
                    alt={val?.data}
                    style={{ width: 26.448, height: 26 }}
                  />
                  <div>{val?.data}</div>
                </Grid>
              </Grid>
            );
          })}
      </Box>
    </>
  );
};

export default RouteComp;
