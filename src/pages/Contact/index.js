import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import Footer from "../../common/footer";
import Linkedin from "../../assets/images/linkedin.png";
import Opportunity from "../../assets/images/opportunity.png";
import AirplayIcon from "@mui/icons-material/Airplay";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "../../assets/images/email.png";
import axios from "axios";


// Data for contact info
const data = [
  { name: "MAIL ME", text1: "thisissmohan@gmail.com" },
  { name: "CONTACT ME", text1: "+91 9095170031" },
  { name: "LOCATION", text1: "Tamil Nadu, India" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://kiotac.com/api/contact",
        data: formData,
      });
      // setCtx(false);
      alert(
        "Thank you for reaching out to us! We’ve received your message and will get back to you within the next 24 hours."
      );
    } catch (error) {
      // alert("Failed to send message: " + error.message);
    }
  };

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
                  initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and move to left
                  animate={{ opacity: 1, x: 0 }} // End with opacity 1 and no horizontal movement
                  transition={{ duration: 0.5 }} // Transition duration
                >
                  <Typography
                    py={2}
                    gutterBottom
                    variant="h5"
                    sx={{
                      color: "#ffff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "13px", md: "16px" },
                      fontWeight: 500,
                      textAlign: "start",
                      lineHeight: "1.2em",
                    }}
                  >
                    CONTACT INFO
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Stack spacing={6}>
                    {data.map((item, index) => (
                      <Stack key={index}>
                        <Stack
                          direction={"row"}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                          spacing={2}
                        >
                          <Stack
                            sx={{
                              backgroundColor: "rgba(76, 86, 111, 0.5)",
                              backdropFilter: "blur(1px)",
                              padding: 3,
                              borderRadius: 3,
                            }}
                          >
                            <ForwardToInboxIcon
                              sx={{ color: "#b0cf00", fontSize: 35 }}
                            />
                          </Stack>
                          <Stack>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#BCBCBC80",
                                fontSize: { xs: "11px", md: "14px" },
                                fontWeight: 400,
                                textAlign: "start",
                                lineHeight: "1.2em",
                                fontFamily: '"Inter", sans-serif',
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#FFFFFFCC",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "start",
                                lineHeight: "1.6em",
                              }}
                            >
                              {item.text1}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#FFFFFFCC",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "13px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "start",
                                lineHeight: "1.6em",
                              }}
                            >
                              {item.text2}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Typography
                    mt={7}
                    gutterBottom
                    variant="h5"
                    sx={{
                      color: "#ffff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: "13px", md: "16px" },
                      fontWeight: 500,
                      textAlign: "start",
                      lineHeight: "1.2em",
                    }}
                  >
                    SOCIAL INFO
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <Stack
                    direction={"row"}
                    spacing={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                          sx={{ color: "#fff", fontSize: 40 }}
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
                            height: 40,
                            width: 40,
                            backgroundColor: "#fff",
                            borderRadius: 50,
                          }}
                        />
                      </a>
                    </Card>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          {/* Form Section Animation */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
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
                <Stack>
                  <CardContent>
                    <Stack spacing={1}>
                      <TextField
                        variant="standard"
                        placeholder="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        InputProps={{ disableUnderline: true }}
                        sx={{
                          "& .MuiInputBase-root": {
                            backgroundColor: "#262B3F",
                            borderRadius: 3,
                            color: "#fff",
                            height: "60px",
                            padding: "8px 12px",
                            fontFamily: '"Inter", sans-serif',
                          },
                          "& .MuiInputBase-input": { fontSize: "16px" },
                        }}
                      />
                      <TextField
                        variant="standard"
                        placeholder="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{ disableUnderline: true }}
                        sx={{
                          "& .MuiInputBase-root": {
                            backgroundColor: "#262B3F",
                            borderRadius: 3,
                            color: "#fff",
                            height: "60px",
                            padding: "8px 12px",
                            fontFamily: '"Inter", sans-serif',
                          },
                          "& .MuiInputBase-input": { fontSize: "16px" },
                        }}
                      />
                      <TextField
                        variant="standard"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        multiline
                        minRows={4}
                        sx={{
                          "& .MuiInputBase-root": {
                            fontFamily: '"Inter", sans-serif',
                            color: "#fff",
                            height: "60px",
                            padding: "8px 12px",
                            marginTop: 4,
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px",
                          },
                        }}
                      />
                    </Stack>
                    {error && (
                      <Typography color="error" sx={{ marginTop: 2 }}>
                        {error}
                      </Typography>
                    )}
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleSubmit}
                      disabled={loading}
                      sx={{
                        marginTop: 3,
                        padding: "12px 25px",
                        fontWeight: 700,
                        fontSize: 16,
                        textTransform: "capitalize",
                        borderRadius: 5,
                        backgroundColor: "#b0cf00",
                        fontFamily: '"Inter", sans-serif',
                        "&:hover": { backgroundColor: "#b0cf00" },
                      }}
                    >
                      {loading ? "Sending..." : "Send"}
                    </Button>
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

export default Contact;
