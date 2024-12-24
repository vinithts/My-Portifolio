import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const navItems = [
  { label: "About Me", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontSize: "30px", fontWeight: 900 }}>
        Vinith
        <span style={{ fontWeight: 50, fontSize: "17px", color: "rgba(78, 75, 75, 0.1)" }}>
          <br />/ Front-End Developer
        </span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textAlign: "center", color: "black" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          minHeight: { xs: "64px", sm: "130px" },
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ marginRight: "50px", marginLeft: "30px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              padding: "8px",
              width: "15px",
              height: "15px",
              backgroundColor: "rgb(15, 35, 211)",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
              fontSize: "30px",
              fontWeight: 900,
              marginLeft: "10px",
            }}
          >
            Vinith
            <span
              style={{
                fontWeight: 50,
                fontSize: "16px",
                color: "rgb(143, 141, 141)",
                marginLeft: "10px",
              }}
            >
              / Front-end Developer
            </span>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "flex" },
              mt: "10px",
            }}
          >
            <List
              sx={{ display: "flex", flexDirection: "row", paddingTop: "0px" }}
            >
              {navItems.map((item, index) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ display: "flex", minWidth: "100px" }}
                >
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: isHovered == index || selectedIndex === index ? "blue" : "black",
                      margin: "0 10px",
                      fontSize: "16px",
                    }}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                    onClick={() => handleClick(index)}
                  >
                    {item.label}
                  </a>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
