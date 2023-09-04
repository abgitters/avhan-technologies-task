import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Dialog, DialogContent } from "@mui/material";
import FrameComp from "../../Frames/FrameComp";

const MyComp3 = () => {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <>
      {/*---------------------------------------------------Select element */}
      <Grid container sx={{ mb: 6 }}>
        <Grid item xs={6} md={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={department}
              onChange={handleChange}
              label="Department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="testing">Testing</MenuItem>
              <MenuItem value="network">Network</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} disabled>
            <InputLabel id="demo-simple-select-standard-label">
              Contacts
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={department}
              onChange={handleChange}
              label="Contacts"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="testing">Testing</MenuItem>
              <MenuItem value="network">Network</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/*---------------------------------------------------Badge element */}
      <Grid container>
        <Grid item xs={5} md={3}>
          <Chip
            label="IT Team"
            variant="outlined"
            color="success"
            sx={{
              width: "9em",
              height: "3em",
              boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 20%)",
            }}
          />
        </Grid>
        <Grid item xs={5} md={3}>
          <Chip
            label="Sales & Marketing"
            variant="outlined"
            sx={{
              width: "9em",
              height: "3em",
              boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 20%)",
            }}
          />
        </Grid>
        <Grid item xs={2} md={6} textAlign="end">
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MyComp3;
