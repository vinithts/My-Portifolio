import React from "react";
import { Box,Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "white",
        color: "white",
        padding: "20px 0",
        width:"100%",
        height:"auto"
      }}
    >
    
        <Typography variant="body2" sx={{color:"black"}}>
          © 2024 Cotyledon Technologies pvt ltd. All rights reserved.
        </Typography>
      </Box>
  );
};

export default Footer;
