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
import React from "react";
import Footer from "../../common/footer";
import Linkedin from "../../assets/images/linkedin.png";
import Opportunity from "../../assets/images/opportunity.png";
import AirplayIcon from "@mui/icons-material/Airplay";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

const data = [
  {
    name: "MAIL ME",
    text1: "thisissmohan@gmail.com",
  },
  {
    name: "CONTACT ME",
    text1: "+91 9095170031",
  },
  {
    name: "LOCATION",
    text1: "Tamil Nadu, India",
  },
];


const Contact = () => {
  return (
    <Box sx={{ marginTop: {xs:3,md:7}, marginBottom:10 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
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

                <Stack spacing={6}>
                  {data.map((item, index) => {
                    return (
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
                              backgroundColor: "#181818",
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
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "11px", md: "14px" },
                                fontWeight: 400,
                                textAlign: "start",
                                lineHeight: "1.2em",
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
                    );
                  })}
                </Stack>

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
                      style={{ height: 40, width: 40 }}
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
                      style={{ height: 40, width: 40 }}
                    />
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Card
                  sx={{
                    height: { xs: "auto", md: "auto" },
                    backgroundColor: "#212121",
                    padding: 2,
                    borderRadius: 7,
                  }}
                >
                  <Stack>
                    <CardContent>
                      <Stack spacing={1}>
                        <Stack
                          direction={"row"}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
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
                            Let's work{" "}
                            <span style={{ color: "#b0cf00" }}>together</span>.
                          </Typography>
                          <Box
                            component="img"
                            src="https://hamzajanjua.com/wp-content/uploads/2023/12/icon2.png.webp"
                            alt="SVG Example"
                            height="70px"
                            sx={{ borderRadius: 2 }}
                          />
                        </Stack>

                        <TextField
                          variant="standard"
                          placeholder="Name *"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            "& .MuiInputBase-root": {
                              backgroundColor: "#242424",
                              borderRadius: 3,
                              color: "#fff",
                              height: "60px",
                              padding: "8px 12px",
                            },
                            "& .MuiInputBase-input": {
                              fontSize: "16px",
                            },
                          }}
                        />

                        <TextField
                          variant="standard"
                          placeholder="Email *"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            "& .MuiInputBase-root": {
                              // backgroundColor: "#242424",
                              // borderRadius: 3,
                              color: "#fff",
                              height: "60px",
                              padding: "8px 12px",
                            },
                            "& .MuiInputBase-input": {
                              fontSize: "16px",
                            },
                          }}
                        />
                        <TextField
                          variant="standard"
                          placeholder="Your Subject *"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            "& .MuiInputBase-root": {
                              // backgroundColor: "#242424",
                              // borderRadius: 3,
                              color: "#fff",
                              height: "60px",
                              padding: "8px 12px",
                            },
                            "& .MuiInputBase-input": {
                              fontSize: "16px",
                            },
                          }}
                        />
                        <TextField
                          variant="standard"
                          placeholder="Your Message"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          multiline
                          minRows={4}
                          sx={{
                            "& .MuiInputBase-root": {
                              // backgroundColor: "#242424",
                              // borderRadius: 3,
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

                        <Stack
                          style={{
                            marginTop: 70,
                          }}
                        >
                          <Button
                            variant="contained"
                            disableElevation
                            sx={{
                              width: "fit-content",
                              backgroundColor: "#323232",
                              textTransform: "capitalize",
                              fontSize: "16px",
                              padding: "16px 30px",
                              "&:hover": {
                                backgroundColor: "#fff", // Set hover background color to white
                                color: "#323232", // Optional: change text color on hover for contrast
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

     
      </Container>
    </Box>
  );
};

export default Contact;
