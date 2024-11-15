import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); 

  return (
    <Box sx={{ backgroundColor: "#0f0f0f", }} py={10}>

      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={6}
      >
        <Box
          component="img"
          src="https://hamzajanjua.com/wp-content/uploads/2023/12/2-4.svg"
          alt="SVG Example"
          height="40px"
          sx={{ borderRadius: 2 }}
        />
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
        {["Portfolio", "Services", "About", "Contact", ].map(
          (item, index) => (
            <Typography
              key={index}
              sx={{
                textTransform: "uppercase",
                color: "#BCBCBC80",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                lineHeight: "25px",
              }}
            >
              {item}
            </Typography>
          )
        )}
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
          Hamza Janjua
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
