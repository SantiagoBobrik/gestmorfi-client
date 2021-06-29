import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";

import { Box } from "@chakra-ui/react";

export const Routes = () => {
  return (
    <Box bg="background.400" h="100vh">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Box>
  );
};
