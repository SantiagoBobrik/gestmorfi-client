import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Common/chakraConfig/theme";
import { Routes } from "./Router/index";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
