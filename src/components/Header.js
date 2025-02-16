import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Sell", "Marketplace", "Community", "Develop", "Resource"];
const moreActions = ["Log In", "Get Started", "Search"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const renderDrawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DrawerHeader sx={{justifyContent:'space-between'}}>
      <img src="images/LOGO.svg" alt="app_logo" height={28}/>
          <IconButton>
            <ClearIcon onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}/>
          </IconButton>
      </DrawerHeader>
        <Divider />
      <List>
        {pages.map((page) => (
          <ListItem button key={page}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
        {moreActions.map((action) => (
          <ListItem button key={action}>
            <ListItemText primary={action} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar elevation={0} position="static" sx={{ backgroundColor:'#E5EFFF',background:'transparant' }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid item xs={12} sm={4} md={3} lg={2} sx={{display:'flex',alignItems:'center'}}>
            {/* Menu icon */}
            <Box sx={{ display: { xs: "flex", md: "flex" ,lg:'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: "#272D4E" }} />
              </IconButton>
            </Box>
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-grid-drawer"
              sx={{ ml: 2,mt:2 }}
            >
              <img src="images/LOGO.svg" alt="app_logo" height={28}/>
            </Typography>
          </Grid>

          {/* Navigation menu */}
          <Grid item xs={7} sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Box sx={{ display: { xs: "none", md: "none",lg:'flex' }, alignItems: "center" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: "#272D4E",
                    textTransform: "none",
                    fontWeight: 550,
                    fontSize: "0.9vw",
                    mx: 1,pl:0
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ display: { xs: "none", md: "none",lg:'flex' }, alignItems: "center" }}>
              <Button
                sx={{
                  color: "#272D4E",
                  textTransform: "none",
                  fontWeight: 550,
                  fontSize: "0.9vw",
                  mr: 2,
                }}
              >
                Log In
              </Button>
              <Button
                sx={{
                  color: "white",
                  background: "#7854F7",
                  textTransform: "none",
                  fontWeight: 550,
                  fontSize: "0.9vw",
                  mr: 2,
                }}
              >
                Get Started
              </Button>
              <IconButton>
                <SearchIcon aria-label="search" sx={{ color: "#272D4E",fontSize:'1.1vw',pr:1,stroke:'#272D4E',strokeWidth:1}} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
