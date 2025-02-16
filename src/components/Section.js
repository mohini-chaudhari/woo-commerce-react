import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  container: {
    background: "transparent",
    backgroundColor: "#7854F7",
    display: "flex",
    padding: {
      md: 0,
      xs: 5,
    },
    margin: 0,
    border:0,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  imageUnion: {
    display: { lg: 'block', xs: 'none' },
    position: "absolute",
    right: '0',
    height: { lg: '250px' },
  },
  topCurve: {
    background: "#ffffff",
    minWidth: "100%",
    height: {lg:"3rem",md:'3rem',sm:'4rem',xs:'4.5rem'},
    borderRadius: "0 0 100% 100%",
    position: "absolute",
    top: -1,
    left: 0,
    zIndex: 1,
  },
  bottomCurve: {
    backgroundColor: "#E5EFFF",
    width: "100%",
    height: {lg:"2rem",md:'3rem',sm:'3rem',xs:'3rem'},
    borderRadius: "100% 100% 0 0",
    position: "absolute",
    bottom: -1,
    left: 0,
    zIndex: 1,
  },
  gridContainer: {
    position: "relative",
    zIndex: 2,
  },
  leftGrid: {
    margin: { md: 0, xs: "auto" },
  },
  girlsImage: {
    height: {
      md: "25rem",
      xs: "20rem",
    },
    ml: { md: 33, xs: 0 },
    borderRadius:5,
    boxShadow: '0px 08px 30px #1c1b1b'
  },
  rightGrid: {
    color: "white",
    pl: { lg: 4, md: 45 },
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    pt: { md: 12, xs: 1 },
  },
  description: {
    fontSize: "0.85rem",
  },
  button: {
    backgroundColor: "#70C217",
    color: "#fff",
    px: 2.2,
    my: 4,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: "0.8rem",
    py: 1.6,
    textTransform: "none",
  },
  downGrid: {
    color: "white",
    pl: { lg: 55, md: 30, xs: 0 },
    order: { md: 1, xs: 2 },
  },
  boysImage: {
    zIndex: 0,
    height: {
      md: "25rem",
      xs: "20rem",
    },
    borderRadius:5,
    boxShadow: '0px 08px 25px #518ef0'
  },
  circle: {
    display: { sm: "none", md: "flex", lg: "flex", xs: "none" },
    position: "absolute",
    border: "4px solid #FFBA49",
    borderRadius: 50,
  },
  dotsContainer: {
    position: "absolute",
    display: { xs: "none", lg: "grid", md: "none" },
    bottom: '20%',
    right: "7.5%",
    gridTemplateColumns: "repeat(4, 8px)",
    gap: "35px",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  leftDotsContainer: {
    position: "absolute",
    display: { xs: "none", lg: "grid", md: "none" },
    top: '35%',
    left: "14%",
    gridTemplateColumns: "repeat(5, 5px)",
    gap: "34px",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  dot: {
    width: "5px",
    height: "5px",
    backgroundColor: "#70C217", // Green color for the dots
    borderRadius: "50%", // Makes it circular
  },
};

const Section = () => {
  return (
    <Box sx={styles.container}>
      <Box component='img' src="images/Union.svg" sx={styles.imageUnion} />
      <Box sx={styles.topCurve} />
      <Grid container sx={styles.gridContainer}>
        <Grid lg={5} md={3} sx={styles.leftGrid}>
          <Box
            component="img"
            src="images/Girls.svg"
            alt="Girls"
            sx={styles.girlsImage}
          />
        </Grid>
        <Grid lg={3.5} md={8} sx={styles.rightGrid}>
          <Typography sx={styles.title}>
            Develop <br />
            Without Limits
          </Typography>
          <Typography component="text" sx={styles.description}>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </Typography>
          <br />
          <Button variant="contained" sx={styles.button}>
            Read the Documentation
          </Button>
        </Grid>

        {/* Down section */}
        <Grid md={6.8} sx={styles.downGrid}>
          <Typography sx={styles.title}>
            Know our <br />
            Global Community
          </Typography>
          <Typography component="text" sx={styles.description}>
            WooCommerce is one of the fastest-growing eCommerce communities.
            We're proud that the helpfulness of the community and a wealth of
            online resources are frequently cited as reasons our users love
            it. There are 80+ meetups worldwide!
          </Typography>
          <br />
          <Button variant="contained" sx={styles.button}>
            Read the Documentation
          </Button>
        </Grid>
        <Grid
          md={4}
          direction="column"
          sx={{
            pl: { md: 6, xs: 0 },
            order: { md: 2, xs: 1 },
            margin: { md: 0, xs: "auto" },
            pt: { md: 5 },
          }}
        >
          <Box
            component="img"
            src="images/Boys.svg"
            alt="Boys"
            sx={styles.boysImage}
          />
        </Grid>
      </Grid>
      <Box sx={styles.bottomCurve} />

      {/* Circles */}
      <Box sx={{ ...styles.circle, height: "40px", width: "40px", left: "11%", top: "14%" }} />
      <Box sx={{ ...styles.circle, height: "40px", width: "40px", right: "32%", top: "48.5%",zIndex:2 }} />
      <Box sx={{ ...styles.circle, height: "290px", width: "290px", left: "13%", top: "17.2%" }} />
      <Box sx={{ ...styles.circle, height: "200px", width: "200px", right: "11%", top: "47.8%" }} />

      {/* Dots */}
      <Box sx={styles.dotsContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Box key={index} sx={styles.dot}></Box>
        ))}
      </Box>
      <Box sx={styles.leftDotsContainer}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Box key={index} sx={styles.dot}></Box>
        ))}
      </Box>
    </Box>
  );
};
// radial-gradiant
export default Section;