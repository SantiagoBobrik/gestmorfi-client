import React from "react";
import { Heading, Flex, Center, Box } from "@chakra-ui/layout";

const NotFound = () => {
  return (
    <>
      <Flex justifyContent="center" wrap="wrap">
        <Center w="100%" justifyContent="center" mt="8rem">
          <img
            src="https://memegenerator.net/img/images/300x300/13964496/negro-confundido-pregunta.jpg"
            alt="404"
          />
        </Center>
        <Box w="100%" textAlign="center">
          <Heading color="text.onBackground" fontSize="5rem">
            404
          </Heading>
        </Box>
        <Box w="100%" textAlign="center">
          <Heading color="text.onSurface" fontSize="5rem">
            ARE YOU CONFUSED BRO?
          </Heading>
        </Box>
      </Flex>
    </>
  );
};

export default NotFound;
