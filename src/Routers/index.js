import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";

import { Box } from "@chakra-ui/react";

export const Routes = () => {
  return (
    <Box bg="background.400" h="100vh">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Box>
  );
};
