import { Box } from "@mui/material";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Section from "./Section";
import TestimonialsSection from "./TestimonialsSection";
import PeopleSection from "./PeopleSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Box>
        <Box
          component="img"
          src="images/Vector.svg"
          sx={{
            display: { lg: "block", xs: "none", md: "block" ,sm:'block'},
            right: "0",
            height: { lg: "790px", md: "550px",sm:'400px'},
            zIndex:0,
            position:'absolute'
          }}
        />

        <Header />
        <HeroSection />
        <FeaturesSection />
        <Section/>
        <TestimonialsSection/>
        <PeopleSection />
        <Footer />
      </Box>
    </>
  );
}

export default HomePage;
