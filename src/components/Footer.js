import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import {
  Twitter,
  FacebookRounded,
  RssFeed,
  Instagram,
} from "@mui/icons-material";
import CtaSection from "./CtaSection";

// style
const styles = {
  container: {
    position: "relative",
  },
  floatingBox: {
    display: { sm: "flex", md: "flex", lg: "flex", xs: "none" },
    position: "absolute",
    border: "4px solid #FFBA49",
    height: "65px",
    width: "65px",
    borderRadius: 50,
    right: "7%",
    top: { lg: "19%", md: "15%",sm:'20%' },
  },
    footerBackground: {
    backgroundColor: "#7854F7",
    color: "white",
  },
  guaranteeSection: {
    display: "flex",
    justifyContent: "space-evenly",
    py: 3,
    textAlign: "center",
    justifyItems: "center",
    flexWrap: "wrap",
    mb: 2,
    px: { lg: 25 },
  },
  guaranteeIcon: {
    margin: "0 10px",
    height: { lg: 30, md: 25, sm: 23, xs: 20 },
  },
  guaranteeText: {
    fontSize: { lg: "1vw", md: "1.5vw", sm: "1.6vw", xs: "4vw" },
  },
  logoBox: {
    textAlign: "center",
    mt: 10,
    mb: 5,
  },
  divider: {
    borderColor: "#9A7DFF",
    mx: { lg: 20, md: 10, sm: 5 },
  },
  footerLinksContainer: {
    display: "flex",
    justifyContent: "center",
    mt: 2,
  },
  footerLinkSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", sm: "flex-start" },
  },
  linkTitle: {
    fontSize: { lg: "11px", xs: "11px" },
    fontWeight: "bold",
    gutterBottom: true,
    pb:1
  },
  linkText: {
    mb: 1,
    fontSize: { lg: "8px", xs: "9px" },
  },
  socialAndCopyright: {
    backgroundColor: "white",
    columnGap:{sm:2},
    display: "flex",
    flexDirection:{xs:'column',lg:'row',md:'row',sm:'row'},
    justifyContent: { md: "space-between", xs: "center" },
    alignItems: "center",
    mt: 5,
    py: 0.5,
    flexWrap: "wrap",
    px: { md: 20, xs: 0 },
  },
  socialIcons: {
    display: "flex",
    gap: {lg:1,xs:2},
  },
  copyrightText: {
    fontSize: "8px",
    color: "#272D4E",
    textAlign: "center",
  },
  automatticLogo: {
    height: {lg:12,md:12,sm:10,xs:12},
    marginTop:{xs:1,sm:0}
  },
};

const Footer = () => {
  const footerLinks = [
    {
      title: "WHO WE ARE",
      links: ["About", "Team", "Work With Us"],
    },
    {
      title: "WOOCOMMERCE",
      links: [
        "Features",
        "Payments",
        "Marketing",
        "Shipping",
        "Extension Store",
        "eCommerce blog",
        "Development blog",
        "Ideas board",
        "Mobile App",
        "Community",
        "Style Guide",
        "Email Newsletter",
      ],
    },
    {
      title: "OTHER PRODUCTS",
      links: ["Storefront", "WooSlider", "Sensei", "Sensei Extensions"],
    },
    {
      title: "SUPPORT",
      links: [
        "Documentation",
        "Customizations",
        "Support Policy",
        "Contact",
        "COVID-19 Resources",
        "Privacy Notice for",
        " California Users",
      ],
    },
    {
      title: "WE RECOMMEND",
      links: [
        "WooExperts",
        "Hosting Solutions",
        "Pre-sales FAQ",
        "Success Stories",
        "Design Feedback Group",
      ],
    },
  ];

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.floatingBox} />
        <CtaSection />
        <Box sx={styles.footerBackground}>
          {/* Guarantee Section */}
          <Box sx={styles.guaranteeSection}>
            <Box display="flex" padding={1}>
              <Box
                component="img"
                src="images/VectorTrue.svg"
                sx={styles.guaranteeIcon}
              />
              <Typography variant="h6" sx={styles.guaranteeText}>
                30 day <strong>money back guarantee</strong>
              </Typography>
            </Box>
            <Box display="flex" padding={1}>
              <Box
                component="img"
                src="images/VectorSetting.svg"
                sx={styles.guaranteeIcon}
              />
              <Typography variant="h6" sx={styles.guaranteeText}>
                <strong>Support</strong> teams across the world
              </Typography>
            </Box>
            <Box display="flex" padding={1}>
              <Box
                component="img"
                src="images/VectorLock.svg"
                sx={styles.guaranteeIcon}
              />
              <Typography variant="h6" sx={styles.guaranteeText}>
                <strong>Safe & Secure</strong> online payment
              </Typography>
            </Box>
          </Box>

          {/* Logo Section */}
          <Box sx={styles.logoBox}>
            <img src="images/LOGO_white.svg" alt="WooCommerce" height="28" />
          </Box>

          <Divider sx={styles.divider} />

          {/* Footer Links */}
          <Grid container spacing={2} columnGap={10} sx={styles.footerLinksContainer}>
            {footerLinks.map((section, index) => (
              <Grid item xs={12} sm={1} md={1} key={index} sx={styles.footerLinkSection}>
                <Typography variant="subtitle1" sx={styles.linkTitle}>
                  {section.title}
                </Typography>
                {section.links.map((link, idx) => (
                  <Link href="#" key={idx} underline="none" color="inherit" display="block" sx={styles.linkText}>
                    {link}
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>

          {/* Social and Copyright Section */}
          <Box sx={styles.socialAndCopyright}>
            <Box sx={styles.socialIcons}>
              <IconButton>
                <Twitter sx={{ color: "#272D4E" }} fontSize="small"/>
              </IconButton>
              <IconButton>
                <FacebookRounded sx={{ color: "#272D4E" }} fontSize="small"/>
              </IconButton>
              <IconButton>
                <RssFeed sx={{ color: "#272D4E" }} fontSize="small"/>
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "#272D4E" }} fontSize="small"/>
              </IconButton>
            </Box>
            <Box sx={{display:{lg:'flex',md:'flex',sm:'flex'},my:{xs:1}}}>
            <Typography sx={styles.copyrightText}>
              COPYRIGHT WOOCOMMERCE 2020 -{" "}
            </Typography>
            <Typography sx={styles.copyrightText}>
              <Link href="#" color="#272D4E">
                TERMS & CONDITIONS
              </Link>{" "}
              </Typography>
              <Typography sx={styles.copyrightText}>
              <Link href="#" color="#272D4E">
                PRIVACY POLICY
              </Link>
            </Typography>
            </Box>
            <Box component='img' src="images/image 25.svg" alt="automattic" sx={styles.automatticLogo} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
