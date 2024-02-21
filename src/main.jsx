import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HomePage } from "./pages/Home.jsx";
import { AboutComponent } from "./pages/About.jsx";
import { HeaderComponent } from "./components/Header.jsx";
import { HeroComponent } from "./components/Hero.jsx";
import { ContactComponent } from "./pages/contract.jsx";
import { ServicesComponent } from "./pages/Services.jsx";
import { PortfolioComponent } from "./pages/Portfolio.jsx";
import { HireMeComponent } from "./pages/HireMe.jsx";
import { ErrorComponent } from "./pages/Error.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "My Stories",
    element: <AboutComponent />,
  },
  {
    path: "header",
    element: <HeaderComponent />,
  },
  {
    path: "hero",
    element: <HeroComponent />,
  },
  {
    path: "contact",
    element: <ContactComponent />,
  },
  {
    path: "My Interest",
    element: <ServicesComponent />,
  },
  {
    path: "portfolio",
    element: <PortfolioComponent />,
  },
  {
    path: "hire-me",
    element: <HireMeComponent />,
  },
  {
    path: "*",
    element: <ErrorComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
