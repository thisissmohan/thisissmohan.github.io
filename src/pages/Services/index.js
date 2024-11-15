import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AirplayIcon from "@mui/icons-material/Airplay";
import { motion } from "framer-motion";
import Linkedin from "../../assets/images/linkedin.png";
import Opportunity from "../../assets/images/opportunity.png";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "../../assets/images/email.png";

// Sample data for icons and services
const textWithIcon = [
  { title: "Web App Development" },
  { title: "Mobile App Development" },
  { title: "UI UX Design" },
  { title: "Software Quality Assurance" },
];

const cardData1 = [
  {
    title:
      "Unleash your digital potential with my web app development expertise. From concept to launch, I engineer bespoke solutions that redefine user experiences. Harnessing cutting-edge technologies, I build high-performance web applications that drive business growth and leave a lasting impact. Let’s transform your ideas into a digital reality that stands above the competition.",
    subtitle: "Web App Development",
  },
  {
    title:
      "Embark on a mobile app journey with my expert development services. I create innovative and user-friendly applications for iOS and Android platforms. From ideation to deployment, I ensure seamless functionality, stunning design, and exceptional performance. Let’s turn your app idea into a reality that captivates users and enhances your business reach.",
    subtitle: "Mobile App Development",
  },
  {
    title:
      "Experienced UI/UX designer crafting captivating and user-centric interfaces. Transforming concepts into visually stunning designs for seamless and delightful user experiences. Let’s collaborate to elevate your digital products and leave a lasting impression on your audience. Together, we’ll create designs that inspire and engage.",
    subtitle: "UI UX Design",
  },
  {
    title:
      "As an expert in Software Quality Assurance, I ensure top-notch performance, reliability, and security of your applications. Meticulously testing and validating software functionalities, I identify and rectify issues to deliver seamless and high-quality user experiences, guaranteeing your software meets the highest standards of excellence.",
    subtitle: "Software Quality Assurance",
  },
];

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Services = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{ overflow: "hidden" }}
    >
      <Box sx={{ marginTop: { xs: 3, md: 7 }, marginBottom: 10 }}>
        <Container>
          <Grid container spacing={3}>
            {/* Sidebar with Service Icons */}
            <Grid item xs={12} md={4}>
              <motion.div variants={fadeUpVariants}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    height: { xs: "250px", md: "810px" },
                    backgroundColor: "#161616",
                    padding: 2,
                    borderRadius: 7,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {textWithIcon.map((item, index) => (
                    <motion.div key={index} variants={fadeUpVariants}>
                      <Stack
                        padding={{ xs: 0, md: 3 }}
                        direction="row"
                        spacing={4}
                        mt={{ xs: 0, md: 6 }}
                        mb={{ xs: 0, md: 6 }}
                        sx={{ alignItems: "center" }}
                      >
                        <AirplayIcon sx={{ color: "#fff" }} />
                        <CardContent>
                          <Typography
                            variant="body2"
                            sx={{
                              textTransform: "uppercase",
                              color: "#ffff",
                              fontFamily: "Inter, sans-serif",
                              fontSize: { xs: "12px", md: "14px" },
                              fontWeight: 500,
                              lineHeight: "1.2em",
                              textAlign: "start",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </CardContent>
                      </Stack>
                    </motion.div>
                  ))}
                </Card>
              </motion.div>
            </Grid>

            {/* Main Content with Service Cards */}
            <Grid item xs={12} md={8}>
              <motion.div variants={fadeUpVariants}>
                <Stack
                  py={{ xs: 3, md: 0 }}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  spacing={2}
                >
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height={{ xs: "30px", md: "50px" }}
                    sx={{ borderRadius: 2 }}
                  />
                  <Typography
                    sx={{
                      color: "#ffff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "26px", md: "74px" },
                      fontWeight: 600,
                      textTransform: "uppercase",
                      lineHeight: "1.2em",
                      letterSpacing: "-1px",
                      textAlign: "start",
                    }}
                  >
                    MY OFFERINGS
                  </Typography>
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height={{ xs: "30px", md: "50px" }}
                    sx={{ borderRadius: 2 }}
                  />
                </Stack>
              </motion.div>

              <Stack
                sx={{
                  backgroundColor: "#181818",
                  padding: 4,
                  borderRadius: 8,
                }}
              >
                <Grid container spacing={3}>
                  {cardData1.map((card, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        variants={fadeUpVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card
                          sx={{
                            maxWidth: "100%",
                            height: { xs: "auto", md: "300px" },
                            backgroundColor: "#212121",
                            padding: 2,
                            borderRadius: 7,
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "uppercase",
                                color: "#BCBCBC80",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "15px" },
                                fontWeight: 500,
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              {card.subtitle}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{
                                color: "#FFFFFFB8",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "14px" },
                                fontWeight: 400,
                                textAlign: "start",
                                lineHeight: "25px",
                              }}
                            >
                              {card.title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={3} sx={{ cursor: "pointer" }}>
              <motion.div
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05 }}
              >
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
              <motion.div
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05 }}
              >
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
    </motion.div>
  );
};

export default Services;
