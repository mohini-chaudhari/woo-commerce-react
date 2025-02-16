import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  container: {
    background: "linear-gradient(#f8f9fc)",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    color: "#272D4E",
    fontSize: { xs: "1.6rem", md: "40px" },
    py: 3,
  },
  description: {
    color: "#94A2B3",
    fontSize: { xs: "12px", lg: "13px" },
    paddingBottom: { xs: 5, md: '16%', lg: '16%' },
    px: { xs: 0 },
  },
  image: {
    mx: "auto",
    position: 'absolute',
    bottom: '0',
    left: '15%',
    width: "70%",
    background: "transparent",
    display: { md: "block", xs: "none" },
  },
  redDotsContainer: {
    position: "absolute",
    display: { xs: "none", lg: "grid", md: "none" },
    bottom: 10,
    right: "5%",
    gridTemplateColumns: "repeat(5, 18px)",
    gap: "20px",
    justifyContent: "end",
    alignItems: "center",
    height: "100px",
  },
  redDot: {
    width: "5px",
    height: "5px",
    backgroundColor: "#EF4358", // Red color for the dots
    borderRadius: "50%", 
  },
  greenDotsContainer: {
    display: { xs: "none", lg: "grid", md: "none" },
    position: "absolute",
    bottom: '6%',
    left: "3.5%",
    gridTemplateColumns: "repeat(5, 18px)",
    gap: "20px",
    justifyContent: "end",
    alignItems: "center",
  },
  greenDot: {
    width: "5px",
    height: "5px",
    backgroundColor: "#70C217", // Green color for the dots
    borderRadius: "50%", 
  },
  circle: {
    display: { sm: "none", md: "flex", lg: "flex", xs: "none" },
    position: "absolute",
    border: "4px solid #FFBA49",
    borderRadius: "50%",
  },
};

const PeopleSection = () => {
  return (
    <Box sx={styles.container}>
      <Typography
        variant="h5"
        component="div"
        fontWeight="bold"
        width="100%"
        textAlign="center"
        sx={styles.title}
      >
        Supported by real people
      </Typography>
      <Typography
        variant="body2"
        width="100%"
        textAlign="center"
        sx={styles.description}
      >
        Our team of Happiness Engineers works remotely from 58 countries
        providing
        <br />
        customer support across multiple time zones.
      </Typography>
      <Box component="img" src="images/People.png" sx={styles.image} />

      {/* Red dots */}
      <Box sx={styles.redDotsContainer}>
        {Array.from({ length: 15 }).map((_, index) => (
          <Box key={index} sx={styles.redDot}></Box>
        ))}
      </Box>

      {/* Green dots */}
      <Box sx={styles.greenDotsContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box key={index} sx={styles.greenDot}></Box>
        ))}
      </Box>

      {/* Circles */}
      <Box sx={{ ...styles.circle, height: "25px", width: "25px", right: "13%", top: "48%" }} />
      <Box sx={{ ...styles.circle, height: "40px", width: "40px", left: "5%", top: "55%" }} />
      <Box sx={{ ...styles.circle, height: "18px", width: "18px", left: "9%", top: "80%" }} />
    </Box>
  );
};

export default PeopleSection;