import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./common/footer";
import Header from "./common/header";
import Routes from "./routes/index";


import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: `"Inter, sans-serif"`,
        // fontSize: 15,
      },
    },
  });
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(250deg, #333 50%, #000 0%)",
      }}
    >
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
