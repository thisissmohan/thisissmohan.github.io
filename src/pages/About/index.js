import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Email from "../../assets/images/email.png";
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
      "Node.js, Express.js, PHP(Laravel CodeIgniter), Python, NestJS, WordPress.",
  },
  {
    title: "Databases",
    subtitle: "SQL, MySQL, MongoDB, PostgreSQL, Firebase.",
  },
  {
    title: "Blockchain Expertise",
    subtitle:
      "Hardhat, Truffle, Smart Contracts, Cryptocurrency, Ethereum, Chainlink, Dapp, DAO, DeFi, Tellor, NFT, ERC20.",
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
      "Currently freelancing full-time, working on a variety of web and mobile projects. My focus is on delivering scalable and efficient applications tailored to client needs. I collaborate directly with clients to understand their goals and provide end-to-end solutions, from design to deployment. I’ve gained hands-on experience with modern frameworks, always ensuring projects meet tight deadlines without compromising quality. Each project helps me expand my skills and stay updated with the latest industry trends.",
  },
  {
    title: "Full Stack Developer | Software Group",
    dob: "2020-2022",
    subtitle:
      "At Software Group, I worked on building and maintaining full-stack applications using React.js, Node.js, and MongoDB. I was part of a team that delivered scalable, user-friendly applications that addressed complex client requirements. My role involved both front-end and back-end development, ensuring a seamless experience for users. I also contributed to debugging, performance optimization, and code reviews, helping to maintain a high standard of quality. This experience deepened my understanding of teamwork in a fast-paced environment.",
  },
  {
    title: "Full Stack Developer | Teknuance Info Solutions Pvt Ltd",
    dob: "2019-2020",
    subtitle:
      "As a project lead, I managed a team to deliver complex software projects on time and within scope. I was responsible for guiding technical decisions, mentoring developers, and ensuring clear communication between the team and stakeholders. I worked closely with clients to define requirements and ensure their vision translated into functional solutions. It was a challenging role where I learned the importance of leadership, adaptability, and maintaining focus under pressure. This role taught me how to balance technical and managerial responsibilities effectively.",
  },
  {
    title: "Software Developer | 10Decoders Consultancy Services",
    dob: "2018-2019",
    subtitle:
      "At 10Decoders, I focused on building responsive, dynamic web applications using React.js. My role included developing reusable components, improving application performance, and collaborating with designers to ensure a smooth user experience. I gained hands-on experience in state management and optimizing loading times for complex applications. Working in this role helped me refine my problem-solving skills and solidify my expertise in front-end technologies. I also contributed to brainstorming sessions, bringing creative solutions to the table.",
  },
  {
    title: "Software Developer | Tass Technology",
    dob: "2017-2018",
    subtitle:
      "As a software developer at Tass Technology, I worked on designing and maintaining web applications using a variety of programming languages and tools. I collaborated closely with cross-functional teams to deliver user-friendly solutions that met client expectations. My focus was on ensuring the applications were reliable, secure, and high-performing. I also gained experience troubleshooting and debugging issues, which improved my attention to detail. This role gave me a solid foundation in software development principles and teamwork.",
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
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                      backgroundColor: "rgba(76, 86, 111, 0.5)",
                      backdropFilter: "blur(1px)",
                      padding: 2,
                      borderRadius: 7,
                      borderWidth: 1.5,
                      borderStyle: "solid",
                      borderColor: "#4C566F",
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
                          backgroundColor: "#ffff",
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
                    SELF-SUMMARY
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
                      backgroundColor: "rgba(76, 86, 111, 0.5)",
                      backdropFilter: "blur(1px)",
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
                            As a Full-Stack Web Developer with over 8+ years of
                            hands-on experience, I specialize in crafting
                            high-performance, scalable applications that exceed
                            client expectations. My commitment to continuous
                            learning drives me to stay at the forefront of
                            technology, ensuring that I can bring the latest
                            innovations to your projects. **Client satisfaction
                            is my ultimate goal, and nothing brings me more
                            satisfaction than delivering solutions that leave my
                            clients delighted** Every new project is an
                            opportunity to expand my skill set. I am passionate
                            about embracing new challenges, learning new
                            technologies, and applying them effectively.
                            Patience, optimism, and perseverance are the core
                            values that define my approach to development.
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
                  backgroundColor: "rgba(76, 86, 111, 0.5)",
                  backdropFilter: "blur(1px)",
                  padding: { xs: 0, md: 2 },

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
                            backgroundColor: "rgba(76, 86, 111, 0.5)",
                            backdropFilter: "blur(1px)",
                            padding: { xs: 1, md: 3 },
                            borderRadius: 5,
                            marginBottom: 3,
                            // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                              // boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#3ccceb",
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
                              fontFamily: '"Inter", sans-serif',
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
                  height: { xs: "auto", md: "auto" },
                  backgroundColor: "rgba(76, 86, 111, 0.5)",
                  backdropFilter: "blur(1px)",
                  padding: { xs: 0, md: 2 },
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
                            backgroundColor: "rgba(76, 86, 111, 0.5)",
                            backdropFilter: "blur(1px)",
                            padding: { xs: 1, md: 4 },
                            borderRadius: 8,
                            marginBottom: 4,
                            // boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-5px)",
                              // boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
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
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Stack
                            width={"100%"}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Grid
                              container
                              spacing={2}
                              sx={{ color: "#BBBBBB" }}
                            >
                              {item.subtitle.split(",").map((sub, i) => (
                                <Grid
                                  item
                                  xs={6}
                                  key={i}
                                  sx={{ marginBottom: 1 }}
                                >
                                  <ListItem
                                    key={i}
                                    sx={{
                                      display: "list-item",
                                      listStyleType: "square",
                                      padding: 0,
                                      color: "#3ccceb",
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "#E0E0E0",
                                        fontSize: "1.1rem",
                                        display: "inline",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      {sub.trim()}
                                    </Typography>
                                  </ListItem>
                                </Grid>
                              ))}
                            </Grid>
                          </Stack>
                        </Card>
                      ))}
                    </Stack>
                    <Stack mt={6}>
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

                    <Stack spacing={1} mt={1}>
                      <Card
                        sx={{
                          backgroundColor: "rgba(76, 86, 111, 0.5)",
                          backdropFilter: "blur(1px)",
                          padding: 4,
                          borderRadius: 8,
                          marginBottom: 4,

                          // boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            // boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#fff",
                            textAlign: "left",
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          UNDER GRADUATION (2013-2017)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#aaaaaa",
                            fontFamily: '"Inter", sans-serif',
                            textAlign: "left",
                          }}
                        >
                          Bachelor of Engineering in Electronics and
                          Communication Anna University, Chennai.
                        </Typography>
                      </Card>
                    </Stack>

                    <Stack py={4.5}>
                      <Divider sx={{ backgroundColor: "#fff" }} />
                    </Stack>

                    <Stack
                      spacing={1}
                      sx={{
                        "&:hover .arrow-icon": {
                          color: "#fff",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Card
                        onClick={() => navigate("/")}
                        sx={{
                          backgroundColor: "rgba(76, 86, 111, 0.5)",
                          backdropFilter: "blur(1px)",
                          padding: 4,
                          borderRadius: 8,
                          marginBottom: 4,
                          cursor: "pointer",
                          // boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            // boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        <Stack
                          direction={"row"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Stack spacing={1}>
                            <Typography
                              sx={{
                                color: "#fff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "30px",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              Discover My
                            </Typography>
                            <Typography
                              sx={{
                                color: "#fff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "30px",

                                fontWeight: 600,
                                textTransform: "uppercase",
                                lineHeight: "1.2em",
                                letterSpacing: "-1px",
                                textAlign: "start",
                                width: "100%",
                              }}
                            >
                              <span style={{ color: "#3ccceb" }}>Digital</span>{" "}
                              Playground
                            </Typography>
                          </Stack>
                          <ArrowForwardIcon
                            sx={{
                              color: "#BCBCBC",
                              fontSize: 40,
                            }}
                            className="arrow-icon"
                          />
                        </Stack>
                      </Card>
                    </Stack>
                  </CardContent>
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ cursor: "pointer" }}>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.05 }}>
              <Card
                onClick={() => navigate("/contact")}
                sx={{
                  maxWidth: "100%",
                  height: { xs: "auto", md: "auto" },
                  backgroundColor: "rgba(76, 86, 111, 0.5)",
                  backdropFilter: "blur(1px)",

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
                    backgroundColor: "#262b3f",
                    padding: 2,
                    borderRadius: 5,
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "rgba(76, 86, 111, 0.5)",
                      backdropFilter: "blur(1px)",
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
                      backgroundColor: "rgba(76, 86, 111, 0.5)",
                      backdropFilter: "blur(1px)",
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
                  backgroundColor: "rgba(76, 86, 111, 0.5)",
                  backdropFilter: "blur(1px)",

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
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
