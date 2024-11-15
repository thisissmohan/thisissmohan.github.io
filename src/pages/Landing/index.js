import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Ivp from "../../assets/images/ivp.png";
import AutoShop from "../../assets/images/autoShop.png";
import Momekz from "../../assets/images/momekz.png";
import Corr from "../../assets/images/corr.png";
import Pawdog from "../../assets/images/pawdog.png";
import Plspeak from "../../assets/images/plspeak.png";
import Mahalola from "../../assets/images/mahalola.png";
import MomekzMobile from "../../assets/images/momekzMobile.png";
import Autoshopmobile from "../../assets/images/autoshopmobile.png";
import IvpMobile from "../../assets/images/ivpMobile.png";
import MahalolaMobile from "../../assets/images/mahalolaMobile.png";

const cardData = [
  {
    title: "InvestPulse",
    subtitle: "Mobile App",
    image: IvpMobile,
  },
  {
    title: "1800AutoShop",
    subtitle: "Mobile App",
    image: Autoshopmobile,
  },
  {
    title: "Momekz",
    subtitle: "Mobile App",
    image: MomekzMobile,
  },
  {
    title: "Mahlolah",
    subtitle: "Mobile App",
    image: MahalolaMobile,
  },
];

const cardData1 = [
  {
    title: "InvestPulse",
    subtitle: "Web App",
    image: Ivp,
  },
  {
    title: "1800AutoShop",
    subtitle: "Web App",
    image: AutoShop,
  },
  {
    title: "Momekz",
    subtitle: "Web App",
    image: Momekz,
  },
  {
    title: "TheWickedMonarch",
    subtitle: "Web App",
    image: Corr,
  },
  {
    title: "PawpackJP",
    subtitle: "WEB APP",
    image: Pawdog,
  },
  {
    title: "Plspeak",
    subtitle: "Web App",
    image: Plspeak,
  },
  {
    title: "Mahlolah​",
    subtitle: "Web App",
    image: Mahalola,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: { xs: 3, md: 7 } }}>
      <Container>
        <Grid container spacing={3} mb={10}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  spacing={2}
                >
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height="30px"
                    sx={{ borderRadius: 2 }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        color: "#ffff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        lineHeight: "1.2em",
                        textAlign: "start",
                      }}
                    >
                      DISCOVER MY
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ffff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",

                        fontWeight: 600,
                        textTransform: "uppercase",
                        lineHeight: "1.2em",
                        letterSpacing: "-1px",
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      DIGITAL ODYSSEY
                    </Typography>
                  </Stack>
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height="30px"
                    sx={{ borderRadius: 2 }}
                  />
                </Stack>
              </Grid>
              {cardData.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  onClick={() => navigate("/portfolio-detail")}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    <Card
                      sx={{
                        maxWidth: "100%",
                        height: { xs: "300px", md: "300px" },
                        backgroundColor: "#161616",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#414141",
                        padding: 2,
                        borderRadius: 7,
                      }}
                    >
                      <Stack
                        direction={"row"}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="300px"
                          image={card.image}
                          alt={card.title}
                          sx={{
                            borderRadius: 2,
                            objectFit: "contain",
                            width: "100%",
                          }}
                        />

                        <CardContent>
                          <Stack mt={2}>
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "uppercase",
                                color: "#BCBCBC80",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "14px" },
                                fontWeight: 500,
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              {card.subtitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#ffff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "18px", md: "22px" },
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              {card.title}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack
              direction={"row"}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Box
                component="img"
                src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                alt="SVG Example"
                height="30px"
                sx={{ borderRadius: 2 }}
              />
              <Stack>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "40px", md: "74px" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                    lineHeight: "1.2em",
                    letterSpacing: "-1px",
                    textAlign: "start",
                  }}
                >
                  DISCOVER MY
                </Typography>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "40px", md: "74px" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                    lineHeight: "1.2em",
                    letterSpacing: "-1px",
                    textAlign: "start",
                  }}
                >
                  DIGITAL ODYSSEY
                </Typography>
              </Stack>
              <Box
                component="img"
                src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                alt="SVG Example"
                height="30px"
                sx={{ borderRadius: 2 }}
              />
            </Stack>

            <Grid container spacing={3}>
              {cardData1.map((card, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    <Card
                      sx={{
                        maxWidth: "100%",
                        height: { xs: "300px", md: "300px" },
                        backgroundColor: "#161616",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#414141",
                        padding: 2,
                        borderRadius: 7,
                      }}
                    >
                      <Stack>
                        <CardMedia
                          component="img"
                          height="200px"
                          image={card.image}
                          alt={card.title}
                          sx={{ borderRadius: 2 }}
                        />
                        <CardContent>
                          <Stack mt={2}>
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "uppercase",
                                color: "#BCBCBC80",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "14px" },
                                fontWeight: 500,
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              {card.subtitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#ffff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "18px", md: "22px" },
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              {card.title}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
