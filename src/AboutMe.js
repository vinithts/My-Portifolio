import React from "react";
import { Box, Card, Typography, Button, Grid, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import vinith from "./Assets/vinith.jpg";

const AboutMe = () => {
  return (
    <>
    <Box
      sx={{
        background:
          "linear-gradient(to right, #E6DACE 40%, #E6DACE 40%, white 40%)",
        height: "100vh",
        // position: "fixed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          marginTop={25}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0px 0px 0px",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "#F4ECE6",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Avatar
                alt="Profile Photo"
                src={vinith}
                sx={{
                  width: 150,
                  height: 150,
                  margin: "0 auto 15px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                VINITH TS
              </Typography>
              <Box
                sx={{
                  backgroundColor: "blue",
                  height: "2px",
                  width: "70px",
                  margin: "20px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  padding: "30px",
                  letterSpacing: "0.25em",
                  fontSize: "17px",
                }}
              >
                Front-End Developer
              </Typography>
              <Box
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "row",
                  padding: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                }}
              >
                {/* Social Links */}
                <Button size="small" sx={{ color: "#3b5998" }}>
                  <FacebookIcon />
                </Button>
                <Button size="small" sx={{ color: "#1da1f2" }}>
                  <TwitterIcon />
                </Button>
                <Button size="small" sx={{ color: "#0077b5" }}>
                  <LinkedInIcon />
                </Button>
                <Button size="small" sx={{ color: "#e1306c" }}>
                  <InstagramIcon />
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Hello
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              Here's who I am & what I do
            </Typography>
            <Box sx={{ padding: "10px 0px 10px 0px" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: "10px", borderRadius: "50px" }}
              >
                RESUME
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "50px" }}
              >
                PROJECTS
              </Button>
            </Box>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", lineHeight: "1.8", color: "gray" }}
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", lineHeight: "1.8", color: "gray" }}
            >
              I’m a great place for you to tell a story and let your users know
              a little more about you.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
     </>
  );
};

export default AboutMe;
