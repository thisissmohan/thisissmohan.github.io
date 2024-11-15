import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Mohan from "../../assets/images/mohan.png";

const pages = ["Portfolio", "Services", "About", "Contact"];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePageNavigation = (page) => {
    setMobileOpen(false); // Close the drawer when a page is selected
    const routes = {
      Portfolio: "/",
      Services: "/services",
      About: "/about",
      Contact: "/contact",
    };
    navigate(routes[page]);
  };

  return (
    <AppBar
      position="static"
      sx={{
        minHeight: { xs: "0px", md: "100px" },
        backgroundImage: "linear-gradient(250deg, #0C267D 67%, #210957 0%)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ marginTop: 1 }}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Mohan}
              alt="SVG Example"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: 35,
                objectFit: "cover",
                borderColor: "gray",
                borderStyle: "solid",
                borderWidth: 1,
              }}
            />
            <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
            }}>Mohan.S</Typography>
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Stack direction="row">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageNavigation(page)}
                  sx={{
                    my: 2,
                    color: "#BCBCBC", // Light gray color by default
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: 16,
                    marginLeft: 2,
                    marginRight: 2,
                    fontFamily: '"Inter", sans-serif',
                    transition: "color 0.3s ease", // Smooth transition for color change
                    "&:hover": {
                      color: "#fff", // White color on hover
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0 }} onClick={() => navigate("/contact")}>
            <Stack sx={{ backgroundColor: "#4C566F", borderRadius: 3 ,}}>
              <Typography py={1} px={4} sx={{
                fontFamily: '"Inter", sans-serif'
              }}>
                Let's talk
              </Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            backgroundColor: "#0f0f0f",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Mohan}
              alt="SVG Example"
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: 35,
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Mohan.S
            </Typography>
          </Stack>

          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton onClick={() => handlePageNavigation(page)}>
                <ListItemText primary={page} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
