import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ArrowForwardIos } from "@mui/icons-material";

const styles = {
  container: {
    background: "linear-gradient(#E5EFFF,#ffffff)",
    px: { xs: 2, sm: 4, md: 8 },
    py: { xs: 4, sm: 6, md: 0 },
    pb: { lg: 20, md: 20,xl:48 },
    display: "flex",
    alignItems: "center",
  },
  gridContainer: {
    py: 0,
    pt: { lg: 10 },
  },
  leftGrid: {
    p: 2,
    pl: { lg: 8 },
  },
  title: {
    mb: 2,
    color: "#272D4E",
    fontSize: { xs: "35px", lg: "60px" },
  },
  description: {
    mt: 2,
    mb: 4,
    zIndex:3,
    color: "#94A2B3",
    position:'relative',
    fontSize: { lg: '15px' },
  },
  button: {
    backgroundColor: "#7854F7",
    color: "#fff",
    px: 5,
    fontWeight: 'bold',
    borderRadius: 10,
    fontSize: { lg: '1vw', xs: '12px' },
    py: 2,
    textTransform: "none",
  },
  linkButton: {
    color: "#007bff",
    textTransform: "none",
    fontSize: { lg: "1vw", xs: '12px' },
    fontWeight: 700,
    px:{lg:0,md:0,sm:0}
  },
  rightGrid: {
    display: { xs: 'none', md: 'block' },
  },
  imageContainer: {
    position: "absolute",
    top: '15%',
    borderRadius: "16px",
    overflow: "hidden",
  },
};

const HeroSection = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={0} alignItems="center" sx={styles.gridContainer}>
        {/* Left side */}
        <Grid item xs={12} lg={7} md={7} sx={styles.leftGrid}>
          <Typography variant="text" fontWeight="bold" sx={styles.title}>
            Building exactly the <br /> eCommerce website <br /> you want.
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            WooCommerce is a customizable, open-source eCommerce platform built on WordPress. <br />
            Get started quickly and make your way.
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            <Button variant="contained" sx={styles.button}>
              Start a New Store
            </Button>
            <Typography sx={{my:'auto',px:1,color:'#94A2B3',fontSize: { lg: "1vw", xs: '12px' }}}>or</Typography>
            <Button variant="link" sx={styles.linkButton}>
              Customize & Extend<ArrowForwardIos sx={{ height: 12 }} />
            </Button>
          </Box>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} lg={5} md={5} sx={styles.rightGrid}>
          <Box sx={styles.imageContainer}>
            <img
              src="images/featured-image.svg"
              alt="People smiling"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;