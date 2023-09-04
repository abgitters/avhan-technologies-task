import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const MyComp2 = () => {
  return (
    <Box component="form" sx={{ py: 3 }}>
      <TextField
        label="Company Name"
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          // width: 771,
          mb: 3,
        }}
        fullWidth
      />
      <TextField
        label="Company BPP"
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          width: 272,
        }}
      />
    </Box>
  );
};

export default MyComp2;
