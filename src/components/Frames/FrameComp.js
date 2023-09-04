import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";

const FrameComp = () => {
  return (
    <Container sx={{ my: 4, mt: 7 }}>
      <Grid container rowSpacing={4}>
        {/*---------------------------------------------------------UserName */}
        <Frame1 />
        {/*-----------------------------------------------------------Avatar */}
        <Frame2 />
        {/*-----------------------------------------------------VideoElement */}
        <Frame3 />
      </Grid>
    </Container>
  );
};

export default FrameComp;
