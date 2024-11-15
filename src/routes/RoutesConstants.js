import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PortfolioDetail from "../pages/PortfolioDetail";
import AboutDetail from "../pages/AboutDetail";
// import Services from "../pages/Services";

const Landing = React.lazy(() => import("../pages/Landing"));
const Services = React.lazy(() => import("../pages/Services"));
const routes = [
  {
    path: "/",
    exact: false,
    element: Landing,
    isAuthenticated: false,
    isCommon: true,
  },
  {
    path: "/services",
    exact: false,
    element: Services,
    isAuthenticated: false,
    isCommon: true,
  },
  {
    path: "/about",
    exact: false,
    element: About,
    isAuthenticated: false,
    isCommon: true,
  },
  {
    path: "/contact",
    exact: false,
    element: Contact,
    isAuthenticated: false,
    isCommon: true,
  },
  {
    path: "/portfolio-detail",
    exact: false,
    element: PortfolioDetail,
    isAuthenticated: false,
    isCommon: true,
  },
  {
    path: "/about-detail",
    exact: false,
    element: AboutDetail,
    isAuthenticated: false,
    isCommon: true,
  },
];

export default routes;
