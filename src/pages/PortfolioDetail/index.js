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

// cardData.js

export const cardData = [
  {
    title: "Project Overview",
    content: `InvestPulse was created to address a common challenge faced by real estate investors: managing property finances across multiple spreadsheets and systems. As the lead developer, my task was to design an intuitive and efficient web platform that consolidates investment data, automates financial tracking, and provides actionable insights. The goal was to create a centralized, user-friendly solution tailored specifically to real estate investors, enabling them to view and analyze the financial health of their portfolios in real time.`,
  },

  {
    title: "Challenges",
    content: `This project came with several unique challenges:
    
    1. **Real-Time Data Updates**  
       Financial data needed to be accurate and constantly updated without manual refreshes, requiring a robust backend design.
    
    2. **User-Friendly Design for Complex Data**  
       Translating complex financial metrics into an accessible format without overwhelming users was essential.
    
    3. **High-Level Security**  
       Given the sensitivity of financial information, we prioritized data protection through encryption and other security measures.`,
  },
  {
    title: "Approach",
    content: `To address these challenges, we implemented the following development strategies:
    
    1. **Agile Development**  
       We followed agile methodology, allowing us to iterate quickly, test features, and gather feedback at every stage.
    
    2. **Frontend and UX Collaboration**  
       Working closely with UX/UI designers, we created a dashboard that displayed financial insights in a digestible format, while maintaining a minimalist, professional look.
    
    3. **API and Data Handling**  
       Using **Node.js** and **MongoDB**, we built a backend that facilitated real-time data synchronization and efficient data retrieval, ensuring a seamless user experience.
    
    4. **Advanced Security Protocols**  
       Data security was a top priority. We integrated encryption and regular auditing practices, meeting industry standards for safeguarding sensitive financial data.`,
  },
  {
    title: "Solution",
    content: `InvestPulse provides an all-in-one platform for real estate investors to:
    
    1. **View Financial Metrics in Real Time**  
       The dashboard displays key metrics like rental income, expenses, and net cash flow in real time.
    
    2. **Simplify Financial Management**  
       With automated financial summaries and reports, users can manage their portfolios effortlessly, without relying on spreadsheets.
    
    3. **Receive Data-Driven Insights**  
       Built-in alerts and notifications prompt users to take action or review performance, enhancing the decision-making process.
    
    4. **Ensure Secure Data Handling**  
       With encrypted storage and secure access controls, users have peace of mind knowing their information is well-protected.`,
  },
  {
    title: "Technologies Used",
    content: `The technology stack for InvestPulse includes:
    
    - **React.js**  
      For a responsive, interactive frontend.
    
    - **Node.js and Express.js**  
      For backend management, API integrations, and real-time data handling.
    
    - **MongoDB**  
      For flexible data storage that supports complex property and financial records.
    
    - **AWS**  
      For secure, scalable cloud deployment.`,
  },
  {
    title: "Conclusion",
    content: `InvestPulse has successfully streamlined the way investors manage their property portfolios, offering a comprehensive yet simple tool that brings all critical data together in one place. Through developing InvestPulse, I had the opportunity to:
    
    - **Tackle complex financial challenges.**
    - **Optimize a real-time user experience.**
    - **Ensure top-level security.**
    
    Ultimately, this robust solution makes property management straightforward and insightful for investors.`,
  },
];




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
        {/* Header Section */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
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
                  variant="h5"
                  sx={{
                    color: "#fff",
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

          {/* Image Section */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
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
                  alt="Portfolio Image"
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
            </motion.div>
          </Grid>
        </Grid>

        {/* Card Section */}
        <Stack mt={4} sx={{ borderRadius: 10 }}>
        <Grid container spacing={2}>
  {card && card.cardData &&
    card.cardData.map((item, index) => (
      <Grid item xs={12} md={6} key={index}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2, // Staggering the animations
          }}
        >
          <Card
            sx={{
              backgroundColor: "#4C566F",
              padding: 2,
              borderRadius: 7,
              height: "100%", // Ensures the card takes full height of the grid cell
              minHeight: "350px", // Ensures all cards are at least this height
              display: "flex",
              flexDirection: "column", // Ensures the content fills the card vertically
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 500,
                  textAlign: "start",
                  lineHeight: "25px",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFFC7",
                  fontFamily: "Inter, sans-serif",
                  textAlign: "start",
                  fontSize: "16px",
                  lineHeight: "1.56em",
                  whiteSpace: "pre-line",
                  marginTop: 2,
                }}
              >
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    ))}
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

export default PortfolioDetail;
