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
import React, { useEffect } from "react";
import Footer from "../../common/footer";
import Linkedin from "../../assets/images/linkedin.png";
import Opportunity from "../../assets/images/opportunity.png";
import AirplayIcon from "@mui/icons-material/Airplay";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "../../assets/images/email.png";

const cardData1 = [
  {
    dob: "Nov 2019 - Present",
    title: "Ababeel Technologies | Founder & CEO",
    subtitle:
      "Ababeel Technologies was responsible for the development of the CozyCryptx web-based crypto wallet. We worked closely with the client to understand their requirements and develop a solution that met their needs. We also worked to ensure that the wallet was secure and user-friendly.",
  },
  {
    dob: "July 2018 - August 2019",
    title: "Oracle App Developer | Cotton Web Pvt Ltd",
    subtitle:
      "We began by conducting a discovery session with the client to understand their business goals and requirements for the wallet. We then developed a prototype of the wallet and presented it to the client for feedback. Once the client was satisfied with the prototype, we began development of the final product.",
  },
  {
    dob: "May 2016 - July 2018",
    title: "Full Stack Developer | Codezy Cloud",
    subtitle:
      "We also made sure that the wallet was user-friendly. We designed the wallet with a simple and intuitive interface that was easy to use for both beginners and experienced users.",
  },
];

const cardData2 = [
  {
    subtitle:
      "CozyCryptx is a company that provides a web-based crypto wallet. The wallet allows users to store, send, and receive cryptocurrencies. CozyCryptx is a small company with a team of experienced developers. They were looking for a reliable and experienced software development company to help them develop their web-based crypto wallet.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const PortfolioDetail = () => {
  const location = useLocation();
  const { card } = location.state || {};
  console.log("cardcardcard", card);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: { xs: 3, md: 7 }, marginBottom: 10 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Stack spacing={3}>
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
                        textTransform: "uppercase",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>

              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={card.image}
                    alt="SVG Example"
                    sx={{
                      borderRadius: 2,
                      width:
                        card.subtitle === "Mobile App"
                          ? { xs: "auto" }
                          : { md: "100%" },
                      height: "700px",
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Stack
          mt={2}
          sx={{
            backgroundColor: "#1c1c1c",
            padding: 4,
            borderRadius: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Card 1 */}
                <Card
                  sx={{
                    maxWidth: "100%",
                    height: { xs: "auto", md: "auto" },
                    backgroundColor: "#212121",
                    padding: 2,
                    borderRadius: 7,
                  }}
                >
                  <Stack>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontSize: { xs: "12px", md: "20px" },
                          fontWeight: 500,
                          textAlign: "start",
                          lineHeight: "25px",
                          textTransform: "uppercase",
                        }}
                      >
                        Our Role
                      </Typography>
                      <Stack spacing={1} mt={3}>
                        {cardData1.map((item, index) => (
                          <Card
                            key={index}
                            sx={{
                              backgroundColor: "#212121",
                              padding: 2,
                              borderRadius: 5,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#FFFFFFC7;",
                                fontFamily: "Inter, sans-serif",
                                textAlign: "start",
                                fontSize: "16px",
                                lineHeight: "1.56em",
                              }}
                            >
                              {item.subtitle}
                            </Typography>
                          </Card>
                        ))}
                      </Stack>
                    </CardContent>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={"none"} md={2}>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "self-start",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src="https://hamzajanjua.com/wp-content/uploads/2023/12/icon2.png.webp"
                  alt="SVG Example"
                  height="70px"
                  sx={{ borderRadius: 2 }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Card 2 */}
                <Card
                  sx={{
                    maxWidth: "100%",
                    height: { xs: "auto", md: "550px" },
                    backgroundColor: "#212121",
                    padding: 2,
                    borderRadius: 7,
                  }}
                >
                  <Stack>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontSize: { xs: "12px", md: "20px" },
                          fontWeight: 500,
                          textAlign: "start",
                          lineHeight: "25px",
                          textTransform: "uppercase",
                        }}
                      >
                        Client Description
                      </Typography>
                      <Stack spacing={1} mt={3}>
                        {cardData2.map((item, index) => (
                          <Card
                            key={index}
                            sx={{
                              backgroundColor: "#212121",
                              padding: 2,
                              borderRadius: 5,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#FFFFFFC7",
                                fontFamily: "Inter, sans-serif",
                                textAlign: "start",
                                fontSize: "16px",
                                lineHeight: "1.56em",
                              }}
                            >
                              {item.subtitle}
                            </Typography>
                          </Card>
                        ))}
                      </Stack>
                    </CardContent>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Stack>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ cursor: "pointer" }}>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.05 }}>
              <Card
                onClick={() => navigate("/contact")}
                sx={{
                  maxWidth: "100%",
                  height: { xs: "auto", md: "auto" },
                  backgroundColor: "#212121",
                  padding: 2,
                  borderRadius: 7,
                  "&:hover .arrow-icon": {
                    color: "#fff",
                    cursor: "pointer",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1d1d1d",
                    padding: 2,
                    borderRadius: 5,
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#2a2a2a",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#414141",
                      padding: 2,
                      borderRadius: 3,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/thisissmohan"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <LinkedInIcon
                        sx={{
                          color: "#fff",
                          fontSize: 40,
                        }}
                        className="arrow-icon"
                      />
                    </a>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#2a2a2a",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#414141",
                      padding: 2,
                      borderRadius: 3,
                    }}
                  >
                    <a
                      href="mailto:thisissmohan@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={Email}
                        alt="Email"
                        style={{
                          height: 50,
                          width: 50,
                          backgroundColor: "#fff",
                          borderRadius: 50,
                        }}
                      />
                    </a>
                  </Card>
                </Stack>
                <Stack>
                  <CardContent>
                    <Stack
                      spacing={1}
                      mt={1}
                      direction={"row"}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        "&:hover .arrow-icon": {
                          color: "#fff",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Stack>
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
                          STAY WITH ME
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontSize: { xs: "12px", md: "20px" },
                            fontWeight: 500,
                            textAlign: "start",
                            lineHeight: "25px",
                          }}
                        >
                          Profiles
                        </Typography>
                      </Stack>

                      <ArrowForwardIcon
                        sx={{
                          color: "#BCBCBC", // Set icon color to light gray initially
                          fontSize: 40,
                        }}
                        className="arrow-icon" // Add a class to target the icon
                      />
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={12} md={9} sx={{ cursor: "pointer" }}>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.05 }}>
              <Card
                onClick={() => navigate("/contact")}
                sx={{
                  maxWidth: "100%",
                  height: { xs: "auto", md: "auto" },
                  backgroundColor: "#212121",
                  padding: 2,
                  borderRadius: 7,
                  "&:hover .arrow-icon": {
                    color: "#fff",
                  },
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "self-start",
                    width: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/icon2.png.webp"
                    alt="SVG Example"
                    height="70px"
                    sx={{ borderRadius: 2 }}
                  />
                </Stack>
                <Stack>
                  <CardContent>
                    <Stack
                      spacing={1}
                      direction={"row"}
                      mt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Stack>
                        <Typography
                          variant="body2"
                          sx={{
                            textTransform: "uppercase",
                            color: "#BCBCBC80",
                            fontFamily: "Inter, sans-serif",
                            fontSize: { xs: "25px", md: "44px" },
                            fontWeight: 500,
                            lineHeight: "1.2em",
                            textAlign: "start",
                          }}
                        >
                          Let's
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontSize: { xs: "25px", md: "44px" },
                            fontWeight: 500,
                            textAlign: "start",
                            lineHeight: "25px",
                          }}
                        >
                          work{" "}
                          <span style={{ color: "#b0cf00" }}>together</span>.
                        </Typography>
                      </Stack>
                      <ArrowForwardIcon
                        sx={{
                          color: "#BCBCBC", // Set icon color to light gray initially
                          fontSize: 40,
                        }}
                        className="arrow-icon" // Add a class to target the icon
                      />
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={6}
            md={3}
            onClick={() => navigate("/about-detail")}
            sx={{cursor:'pointer'}}
          >
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.05 }}>
              <Card
                sx={{
                  maxWidth: "100%",
                  height: { xs: "auto", md: "auto" },
                  backgroundColor: "#212121",
                  padding: 2,
                  borderRadius: 7,
                }}
              >
                <Stack>
                  <CardContent>
                    <Stack
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      spacing={6}
                    >
                      <Box
                        component="img"
                        src="https://hamzajanjua.com/wp-content/uploads/2023/12/Untitled-400-%C3%97-200-px.png"
                        alt="SVG Example"
                        height="100px"
                        sx={{ borderRadius: 2 }}
                      />
                    </Stack>
                    <Stack spacing={1} mt={2}>
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
                        more about me
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          fontSize: { xs: "12px", md: "20px" },
                          fontWeight: 500,
                          textAlign: "start",
                          lineHeight: "25px",
                        }}
                      >
                        Credentials
                      </Typography>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioDetail;
