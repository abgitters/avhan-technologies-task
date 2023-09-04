import React from "react";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";

const MyComp1 = () => {
  return (
    <>
      {/*-------------------------------------------------------------- img */}
      <Grid item md={2}>
        <Badge
          color="warning"
          overlap="circular"
          size="large"
          // badgeContent={<CreateIcon sx={{ width: "100%", height: "100%" }} />}
          badgeContent=" "
        >
          <Box
            sx={{
              backgroundColor: "#C4C4C4",
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          ></Box>
        </Badge>
      </Grid>
      {/*---------------------------------------------------------myCompany */}
      <Grid item md={7}>
        <div>My Company</div>
        <CreateIcon color="warning" />
        <div
          style={{
            width: 269,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#FFFFFF",
            textAlign: "end",
            padding: "0px 2px",
            position: "relative",
            boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 20%)",
          }}
        >
          <div
            style={{
              width: 129,
              height: 40,
              borderRadius: 20,
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#E6E4A5",
              textAlign: "center",
            }}
          >
            Company
          </div>
          Location
        </div>
      </Grid>
      {/*---------------------------------------------------------search */}
      <Grid item md={3}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            style={{
              width: 225,
              height: 30,
              borderRadius: 15,
              border: "1px solid",
            }}
          />
          <span style={{ position: "absolute", top: 5, left: 8 }}>
            <SearchIcon />
          </span>
        </div>
      </Grid>
    </>
  );
};

export default MyComp1;
