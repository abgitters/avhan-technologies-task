import React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Frame3 = () => {
  return (
    <>
      <Grid item xs={12} sm={4} md={4}>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={3}
        >
          <Grid item>
            <div style={{}}>
              <iframe
                width="420"
                height="250"
                src="https://www.youtube.com/embed/Faow3SKIzq0?si=BJwfQL6uAufoaxcG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Chip label="Offer 1" variant="outlined" color="primary" />
              <Chip label="Offer 2" variant="outlined" color="secondary" />
              <Chip label="Offer 3" variant="outlined" color="warning" />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Frame3;
