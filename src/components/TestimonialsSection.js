import { East, West } from "@mui/icons-material";
import { Box, Typography,IconButton } from '@mui/material'
import React from 'react'
const owners = [
    {
      id: 1,
      src: "images/Owner1.svg",
      alt: "Owner 1",
      height: "130px",
      width: "130px",
      left: "20%",
      top: "30%",
    },
    {
      id: 2,
      src: "images/Owner2.svg",
      alt: "Owner 2",
      height: "93px",
      width: "93px",
      left: "5%",
      top: "60%",
    },
    {
      id: 3,
      src: "images/Owner3.svg",
      alt: "Owner 3",
      height: "105px",
      width: "105px",
      left: "12%",
      top: "92%",
    },
    {
      id: 4,
      src: "images/Owner4.svg",
      alt: "Owner 4",
      height: "99px",
      width: "99px",
      left: "70%",
      top: "28%",
    },
    {
      id: 5,
      src: "images/Owner5.svg",
      alt: "Owner 5",
      height: "140px",
      width: "140px",
      left: "80%",
      top: "62%",
    },
    {
      id: 6,
      src: "images/Owner6.svg",
      alt: "Owner 6",
      height: "89px",
      width: "89px",
      left: "74%",
      top: "95%",
    },
  ];
  

const styles={
    container: {
        background: "linear-gradient(#E5EFFF,#ECF0FD,#ffffff)",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: { lg: 20 },
      },
      title: {
        color: "#272D4E",
        fontSize: { xs: "1.6rem", md: "2.6vw" },
        pt: { lg: 15, xs: 0, md: 6 },
        pb: { lg: 10, xs: 0, md: 2 },
      },
    boxContainer:{
        margin:'auto',
        textAlign:'center',
        display:'grid',
        gridTemplateColumns:'auto auto auto',
        gridTemplateRows:'auto auto auto'
    },
    gridCol:{
        position:'relative',
        zIndex:1,
        margin:'auto',
        gridColumn:2,
        gridRow:'1/span 2',
        background:'transparent' 
    },
    gridText:{
        zIndex:2,
        position:'absolute',
        top:1,
        py:{lg:14,sm:10,xs:7},
        px:{lg:12,xs:8},
        margin:'auto',
        fontSize:{lg:'1.3rem',sm:'1rem',xs:'0.6rem'},
        color: "#94A2B3",
    },
    iconButton1: {
        position: "absolute",
        bottom: "-2%",
        right: "39%",
        display: { lg: "block", sm: "none", xs: "none", md: "none" },
      },
      iconButton2: {
        position: "absolute",
        bottom: "-2.9%",
        right: "37%",
        display: { lg: "block", sm: "none", xs: "none", md: "none" },
      },
      ownerImage: {
        display: { xs: "none", lg: "flex", md: "none" },
        position: "absolute",
      },
      redDotsContainer: {
        position: "absolute",
        display: { xs: "none", lg: "grid", md: "grid", sm: "grid" },
        top: { lg: "50%", sm: "21%", md: "28%" },
        right: { lg: "24%", sm: "19%", md: "19%" },
        gridTemplateColumns: "repeat(3, 5px)",
        gap: "35px",
        justifyContent: "center",
        alignItems: "center",
        height: "110px",
      },
      greenDotsContainer: {
        position: "absolute",
        display: { xs: "none", lg: "grid", md: "grid", sm: "grid" },
        top: { lg: "79%", sm: "50%", md: "65%" },
        left: { lg: "24.4%", sm: "20%", md: "20%" },
        gridTemplateColumns: "repeat(10, 5px)",
        gap: "35px",
        justifyContent: "center",
        alignItems: "center",
        height: "110px",
      },
      dot: {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
      },
}
const DemoSection = () => {
  return (
    <>
     <Box sx={styles.container}>
          <Typography
            alignContent
            variant="h5"
            component="div"
            fontWeight="bold"
            width="100%"
            textAlign="center"
            sx={styles.title}
          >
            Trusted by Agencies
            <br />& Store Owners
          </Typography>
    <Box sx={styles.boxContainer}>
        <Box sx={styles.gridCol}>
            <Box
            component={'img'}
            src='images/Card Grid.png'
            position={'relative'}
            sx={{
                height:{lg:400,md:300,sm:300,xs:200},
                zIndex:0
            }}/>
            <Typography sx={styles.gridText}>
            No other eCommerce platform allows people to start for free and
          grow their store as their business grows. More importantly,
          WooCommerce doesn't charge you a portion of your profits as your
          business grows!
            </Typography>
        </Box>
    </Box>
    <IconButton sx={styles.iconButton1}>
        <West aria-label="west" sx={{ fontSize: '1.7vw', pr: 2 }} />
      </IconButton>
      <IconButton sx={styles.iconButton2}>
      <East aria-label="east" fontSize="large" sx={{ color: "#272D4E", stroke: '#272D4E', strokeWidth: 0 }} />
      </IconButton>
      {owners.map((person) => (
        <Box
          component={"img"}
          key={person.id}
          src={person.src}
          alt={person.alt}
          sx={{ ...styles.ownerImage, height: person.height, width: person.width, left: person.left, top: person.top }}
        />
      ))}
      <Box sx={styles.redDotsContainer}>
        {Array.from({ length: 15 }).map((_, index) => (
          <Box key={index} sx={{ ...styles.dot, backgroundColor: "#EF4358" }}></Box>
        ))}
      </Box>
      <Box sx={styles.greenDotsContainer}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Box key={index} sx={{ ...styles.dot, backgroundColor: "#70C217" }}></Box>
        ))}
      </Box> 
    </Box>
    </>
  )
}

export default DemoSection
