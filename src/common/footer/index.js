import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Mohan from "../../assets/images/mohan.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#0f0f0f" }} py={10}>
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={6}
      >
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
            }}
          />
          <Typography sx={{ color: "#fff" }}>Mohan.S</Typography>
        </Stack>
      </Stack>

      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: isMobile ? "center" : "start",
        }}
        spacing={isMobile ? 2 : 6}
        py={4}
      >
        {["Portfolio", "Services", "About", "Contact"].map((item, index) => (
          <Typography
            key={index}
            sx={{
              textTransform: "uppercase",
              color: "#BCBCBC80",
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              lineHeight: "25px",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#fff",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              switch (item) {
                case "Portfolio":
                  navigate("/");
                  break;
                case "Services":
                  navigate("/services");
                  break;
                case "About":
                  navigate("/about");
                  break;
                case "Contact":
                  navigate("/contact");
                  break;
                default:
                  break;
              }
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: isMobile ? "center" : "start",
        }}
        spacing={1}
      >
        <Typography
          sx={{
            color: "#BCBCBC80",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "1.2em",
          }}
        >
          © All rights reserved by
        </Typography>
        <Typography
          sx={{
            color: "#b5d600",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "25px",
          }}
        >
          Mohan.S
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
