import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HandleUpdate from "./components/HandleUpdate";
import ServiceWorkerProvider from "./components/ServiceWorkerProvider/ServiceWorkerProvider";
import BottomNav from "./components/BottomNav/BottomNav";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./app/AppRoutes";

import { db } from "./configs/db";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#042A2B",
    },
    secondary: {
      main: "#5EB1BF",
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ServiceWorkerProvider>
          <Router>
            <NavBar />
            <div style={{ height: "calc(100vh - 114px)", overflowY: "scroll" }}>
              <AppRoutes />
            </div>
            <HandleUpdate />
            <BottomNav />
          </Router>
        </ServiceWorkerProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
