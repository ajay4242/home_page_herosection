import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      
    
      
            <Home />
         
       
    
    </MuiThemeProvider>
  </BrowserRouter>

  );
}

export default App;
