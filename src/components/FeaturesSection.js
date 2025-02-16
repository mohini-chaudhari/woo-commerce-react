import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

// style
const styles = {
  container: {
    background: "linear-gradient( #f8f9fc)",
    px: { xs: 2, sm: 4, md: 10 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: { md: 8 },
  },
  title: {
    color: "#272D4E",
    fontSize: { xs: "30px", lg: "40px", md: "30px" },
    paddingBottom: { xs: 3, lg: 0 },
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
  },
  gridContainer: {
    columnGap: { lg: 7, md: 4, sm: 4 },
  },
  card: {
    margin: 0,
    padding: 0,
  },
  cardTitle: {
    margin: 0,
    color: "#272D4E",
    fontWeight: 600,
    fontSize: { md: "1.8vw", xs: "25px" },
    lineHeight: {lg:"70px",sm:'none'},
    textAlign: {lg:"center",sm:'start'},
    paddingTop: 0,
  },
  cardDescription: {
    color: "#94A2B3",
    textAlign: "start",
    fontSize: { lg: "0.9vw" },
    paddingLeft: { lg: 9 },
  },
  cardDescription2:{
    color: "#94A2B3",
    textAlign: "start",
    fontSize: { lg: "0.9vw" },
    paddingRight:{lg:9}
  
  },
  button: {
    p: 0,
    color: "#007bff",
    textTransform: "none",
    fontSize: { lg: "0.9vw" },
    paddingLeft: { lg: 9 },
    fontWeight: 700,
  },
  
  cardMedia: {
    margin: 0,
  },
  cardMediaSecond: {
    marginTop: { lg: "80px", md: 0 },
  },
  cardMediaThird: {
    marginTop: { lg: "95px", md: 0 },
  },
};

const FeaturesSection = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>
        Your eCommerce
        <br />
        made simple
      </Typography>
      <Grid container sx={styles.gridContainer} alignItems="center">
        {/* Card 1 */}
        <Grid xs={12} md={3.8} sm={3.5}>
          <Card elevation={0} sx={styles.card}>
            <CardMedia
              component="img"
              alt="Card 1"
              image="images/Group 25.svg"
              sx={styles.cardMedia}
            />
            <CardContent sx={{ px: 0 }}>
              <Typography gutterBottom variant="h5" sx={styles.cardTitle}>
                All You Need to Start
              </Typography>
              <Typography variant="body2" sx={styles.cardDescription}>
                Add WooCommerce plugin to any WordPress site and set up a new
                store in minutes.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 0, p: 0 }}>
              <Button sx={styles.button} variant="link">
                Ecommerce for WordPress
                <ArrowForwardIos sx={{ height: 12 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid xs={12} md={3.2} sm={3.5}>
          <Card elevation={0} sx={styles.card}>
            <CardMedia
              component="img"
              alt="Card 2"
              image="images/Group 26.svg"
              sx={styles.cardMediaSecond}
            />
            <CardContent sx={{ px: 0 }}>
              <Typography gutterBottom variant="h5" sx={{...styles.cardTitle,textAlign:'start'}}>
                Customize and Extend
              </Typography>
              <Typography variant="body2" sx={styles.cardDescription2}>
                From subscriptions to gym classes to luxury cars,
                WooCommerce is fully customizable.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 0, p: 0 }}>
              <Button sx={{...styles.button,paddingLeft:0}} variant="link">
                Browse Extensions
                <ArrowForwardIos sx={{ height: 12 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid xs={12} md={3.5} sm={3.5}>
          <Card elevation={0} sx={styles.card}>
            <CardMedia
              component="img"
              alt="Card 3"
              image="images/Group 27.svg"
              sx={styles.cardMediaThird}
            />
            <CardContent sx={{ px: 0 }}>
              <Typography gutterBottom variant="h5" sx={{...styles.cardTitle,textAlign:'start'}}>
                Active Community
              </Typography>
              <Typography variant="body2" sx={{ ...styles.cardDescription2, paddingRight: { lg: 10 } }}>
                WooCommerce is one of the fastest-growing
                eCommerce communities.
              </Typography>
            </CardContent>
            <CardActions sx={{ px: 0, p: 0 }}>
              <Button sx={{...styles.button,paddingLeft:0}} variant="link">
                Check our Forums
                <ArrowForwardIos sx={{ height: 12 }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
