import React from "react";
import Grid from "@mui/material/Grid";
import MyComp1 from "./My-Comp/MyComp1";
import MyComp2 from "./My-Comp/MyComp2";
import MyComp3 from "./My-Comp/MyComp3";

const MyCompany = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ pt: 3 }}>
        <MyComp1 />
        <MyComp2 />
        <MyComp3 />
      </Grid>
    </>
  );
};

export default MyCompany;
