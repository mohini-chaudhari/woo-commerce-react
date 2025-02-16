import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

// Styles 
const styles = {
  container: {
    backgroundColor: "#5F37EF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: { xs: 4, sm: 6, md: 8 },
  },
  textGrid: {
    textAlign: { xs: "center", md: "start" },
    paddingLeft: { lg: 35, md: 15, xs: 0 },
  },
  text: {
    color: "white",
    paddingLeft:{lg:32},
    fontSize: { xs: "18px", sm: "20px", lg: "25px" },
    fontWeight: 500,
  },
  button: {
    color: "#fff",
    px: 4,
    py: 1.5,
    borderRadius: 10,
    fontSize: "14px",
    fontWeight: "bold",
    border: "2px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "#5F37EF",
      borderColor: "white",
    },
  },
};

const CtaSection = () => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={2} alignItems="center">
        {/* Text Section */}
        <Grid item lg={8.5} md={8} xs={12} sx={styles.textGrid}>
          <Typography sx={styles.text}>
            WooCommerce - the <strong>most customizable eCommerce platform</strong> for building <strong>your online business.</strong>
          </Typography>
        </Grid>

        {/* Button Section */}
        <Grid
          item
          lg={2}
          md={3}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "center" },
            marginTop: { xs: 2, md: 0 },
          }}
        >
          <Button variant="outlined" sx={styles.button}>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CtaSection;
