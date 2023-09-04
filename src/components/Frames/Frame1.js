import React from "react";
import Grid from "@mui/material/Grid";

const Frame1 = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{
          borderLeft: { md: "50px solid #4791D6", xs: "30px solid #4781D6" },
        }}
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/*----------------------------------------------------------image */}
          <Grid item>
            <img src="https://s3-alpha-sig.figma.com/img/852f/8b0a/828536899e16b69e9f09da39370437a5?Expires=1694390400&Signature=esXpzJwJpFoailoYyqqLoPG8eHFwAfBsg0M0NoTCcD-NzlJlcgtfcq059zVk78bM6CBWRVcz9qoWtAnqPwEGslqroTrLngr2fMa7wTHpAheqTCDHIEFXjk-QiI0G5ACrvcuEfrv0KSiIr5JdxhFZyZ72293XtHdCk9kMmN3mU2tgMv9Z9BLffGqmvz1Cmq0dRYEwNL5SayoDqWgJG7x0xESOIe0fImKZ8MPIPdhMfJVW7XrfUue8JVi4TPeatBfBJrTe8~KCOXsFU3YTLMDjQ0HzY4yw0VY9r5qMyIRokeun6pv9v55sOJCAAa6QyjB~AwyGL5Kdu80TSSPLp5rVfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </Grid>
          {/*----------------------------------------------------------UserName */}
          <Grid item display="flex" flexDirection="column" margin={2}>
            <h4
              style={{
                color: "#F93439",
                fontSize: 48,
                fontWeight: 700,
                backgroundColor: "linearGradient(to right, red , yellow)",
                marginTop: 3,
                marginBottom: 3,
                alignSelf: "flex-start",
              }}
            >
              User Name
            </h4>
            <div
              style={{
                height: 6,
                backgroundImage:
                  "linear-gradient(90deg, #F00 10.17%, #7D18E2 66.31%, #FFF 100%)",
              }}
            />
            <h3>Title</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Department</span>
              <span>Department Value</span>
            </div>
          </Grid>
          {/*----------------------------------------------------------CompanyName */}
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start",
              p: 4,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 26 }}>Company Name</div>
            <span>Address 1</span>
            <span>Address 2</span>
            <span>Address 3</span>
            <span>Maharashtra, 400028 India</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Frame1;
