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
import Footer from "../../common/footer";
import Linkedin from "../../assets/images/linkedin.png";
import Opportunity from "../../assets/images/opportunity.png";
import AirplayIcon from "@mui/icons-material/Airplay";
import { motion } from "framer-motion";
import Mohan from "../../assets/images/mohan.png";

const cardData1 = [
  {
    title: "Frontend Development",
    subtitle:
      "React Native, Next.js, ReactJS, AngularJS, Vue.js, Bootstrap 5+, WordPress.",
  },
  {
    title: "Backend Development",
    subtitle:
      "Node.js, Express.js, PHP (Laravel, CodeIgniter), Python, NestJS.",
  },
  {
    title: "Databases",
    subtitle: "SQL, MySQL, MongoDB, PostgreSQL, Firebase.",
  },
  {
    title: "Blockchain Expertise",
    subtitle:
      "Hardhat, Truffle, Smart Contracts, Cryptocurrency, Ethereum, Chainlink, DeFi, Tellor, NFT, ERC20.",
  },
  {
    title: "Infrastructure & DevOps",
    subtitle: "Docker, AWS, CI/CD (Jenkins), Kubernetes, WebRTC (Jitsi).",
  },
];

const cardData2 = [
  {
    title: "Full Stack Developer | Freelancing full-time",
    dob: "2022-Present",
    subtitle:
      "Currently freelancing full-time, with extensive experience in completing diverse projects.",
  },
  {
    title: "Full Stack Developer | Software Group",
    dob: "2020-2022",
    subtitle:
      "At Software Group in Chennai, I was a full stack developer managing internal products and a bank project in SA. I handled Unified Solutions and Platform Admin portals, developed a savings/loan USSD functionality, and worked with MySQL and Redis.",
  },
  {
    title: "Full Stack Developer | Teknuance Info Solutions Pvt Ltd",
    dob: "2019-2020",
    subtitle:
      "At Tek nuance Info Solutions Pvt Ltd, I led a team of 8-10 developers, managing quality, schedules, and risks, while developing a chat application with call and video features and using Redis Graph.",
  },
  {
    title: "Software Developer | 10Decoders Consultancy Services",
    dob: "2018-2019",
    subtitle:
      "At 10Decoders Consultancy Services, I analyzed database performance, developed troubleshooting solutions, and ensured high availability for mission-critical applications through collaboration with internal teams.",
  },
  {
    title: "Software Developer | At Tass Technology",
    dob: "2017-2018",
    subtitle:
      "At Tass Technology in Chennai, I specialized in JSP, JavaScript, Java, and UNIX Shell Scripting, and operated web servers like Apache and Tomcat. I also designed UIs with HTML and CSS, and documented troubleshooting solutions for support.",
  },
  {
    title: "GitHub",
    dob: "",
    subtitle: "https://github.com/thisissmohan",
  },
  {
    title: "GitLab",
    dob: "",
    subtitle: "https://gitlab.com/kiotac",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const AboutDetail = () => {
  return (
    <Box sx={{ marginTop: { xs: 3, md: 7 }, marginBottom: 10 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Card
                    sx={{
                      maxWidth: "100%",
                      height: { xs: "auto", md: "460px" },
                      backgroundColor: "#161616",
                      padding: 2,
                      borderRadius: 7,
                      borderWidth: 1.5,
                      borderStyle: "solid",
                      borderColor: "#282828",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <Box
                        component="img"
                        src="https://imgcdn.stablediffusionweb.com/2024/9/10/f90828e2-7447-4784-9739-f2a6de1745ce.jpg"
                        alt="SVG Example"
                        height={"300px"}
                        sx={{
                          borderBottomRightRadius: 35,
                          borderTopLeftRadius: 35,
                        }}
                      /> */}
                      <Box
                        component="img"
                        src={Mohan}
                        alt="SVG Example"
                        sx={{
                          height: "300px",
                          borderBottomRightRadius: 35,
                          borderTopLeftRadius: 35,
                          objectFit: "cover",
                          backgroundColor:'#ffff'
                        }}
                      />
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Stack
                py={{ xs: 3, md: 0 }}
                direction={"row"}
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
                <Stack>
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
                    SELF-SUMMARYeeeeee
                  </Typography>
                </Stack>
                <Box
                  component="img"
                  src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                  alt="SVG Example"
                  height={{ xs: "30px", md: "50px" }}
                  sx={{ borderRadius: 2 }}
                />
              </Stack>
            </motion.div>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Card
                    sx={{
                      height: { xs: "auto", md: "auto" },
                      backgroundColor: "#212121",
                      padding: 2,
                      borderRadius: 7,
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
                        <Stack spacing={1}>
                          <Typography
                            variant="body2"
                            sx={{
                              textTransform: "capitalize",
                              color: "#ffff",
                              fontFamily: "Inter, sans-serif",
                              fontSize: { xs: "25px", md: "44px" },
                              fontWeight: 500,
                              lineHeight: "1.2em",
                              textAlign: "start",
                            }}
                          >
                            MOHAN SELVAM
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                              color: "#FFFFFF9C",
                              fontFamily: "Inter, sans-serif",
                              fontSize: { xs: "11px", md: "16px" },
                              fontWeight: 400,
                              textAlign: "start",
                              lineHeight: "25px",
                            }}
                          >
                            Strong decision-maker with 6+ years of experience in
                            software engineering and application development.
                            Effective coach and mentor and committed to leading
                            exceptionally gifted teams. Ready to work closely
                            with both teams and customers to identify most
                            efficient and beneficial solutions for process
                            improvement. Self-motivated, hard- working graduate
                            student in Computer Software, seeking to apply broad
                            foundation in engineering principles while providing
                            engineering support and providing exposure to
                            opportunities in the IT sector. Successful
                            completion of advanced academic projects
                            demonstrating engineering support capability.
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Card 2 */}
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
                      EXPERIENCE
                    </Typography>
                    <Stack spacing={1} mt={3}>
                      {cardData2.map((item, index) => (
                        <Card
                          key={index}
                          sx={{
                            backgroundColor: "#212121",
                            padding: 3,
                            borderRadius: 5,
                            marginBottom: 3,
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#aaaaaa",
                              fontFamily: "Inter, sans-serif",
                              fontStyle: "italic",
                              marginBottom: 1,
                              textAlign: "start",
                            }}
                          >
                            {item.dob}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#fff",
                              fontWeight: "bold",
                              marginBottom: 1,
                              textAlign: "start",
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: "#f0f0f0",
                              fontFamily: "Inter, sans-serif",
                              textAlign: "start",
                              lineHeight: 1.6,
                            }}
                          >
                            {item.title === "GitHub" ||
                            item.title === "GitLab" ? (
                              <a
                                href={item.subtitle}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#00aaff",
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                  fontWeight: "bold",
                                  transition: "color 0.3s ease",
                                }}
                                onMouseOver={(e) =>
                                  (e.target.style.color = "#007bb5")
                                }
                                onMouseOut={(e) =>
                                  (e.target.style.color = "#00aaff")
                                }
                              >
                                {item.subtitle}
                              </a>
                            ) : (
                              item.subtitle
                            )}
                          </Typography>
                        </Card>
                      ))}
                    </Stack>
                    <Stack mt={2}>
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
                        EDUCATION
                      </Typography>
                    </Stack>

                    <Stack spacing={1} mt={3}>
                      <Card
                        sx={{
                          backgroundColor: "#212121",
                          padding: 2,
                          borderRadius: 5,
                          marginBottom: 2,
                        }}
                      >
                        <Typography variant="h6" sx={{ color: "#fff" }}>
                          UNDER GRADUATION (2013-2017)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#aaaaaa",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Bachelor of Engineering in Electronics and
                          Communication Anna University, Chennai.
                        </Typography>
                      </Card>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Card 1 */}
              <Card
                sx={{
                  maxWidth: "100%",
                  height: { xs: "auto", md: "1620px" },
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
                      SKILLS
                    </Typography>
                    <Stack spacing={1} mt={3}>
                      {cardData1.map((item, index) => (
                        <Card
                          key={index}
                          sx={{
                            backgroundColor: "#333333",
                            padding: 4,
                            borderRadius: 8,
                            marginBottom: 4,
                            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-5px)",
                              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#fff",
                              fontWeight: "600",
                              marginBottom: 2,
                              fontSize: "1.25rem",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Grid container spacing={2} sx={{ color: "#BBBBBB" }}>
                            {item.subtitle.split(",").map((sub, i) => (
                              <Grid
                                item
                                xs={6}
                                key={i}
                                sx={{ textAlign: "left", marginBottom: 1 }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#E0E0E0",
                                    fontSize: "1.1rem",
                                    display: "inline-block",
                                  }}
                                >
                                  {i + 1}. {sub.trim()}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        </Card>
                      ))}
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={3}>
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
                    <img
                      src={Linkedin}
                      alt=""
                      style={{ height: 50, width: 50 }}
                    />
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
                    <img
                      src={Opportunity}
                      alt=""
                      style={{ height: 50, width: 50 }}
                    />
                  </Card>
                </Stack>
                <Stack>
                  <CardContent>
                    <Stack spacing={1} mt={1}>
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
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
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
                    <Stack spacing={1} mt={2}>
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
                        work <span style={{ color: "#b0cf00" }}>together</span>.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutDetail;
