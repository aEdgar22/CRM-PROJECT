import { Box } from "@chakra-ui/react";
import React from "react";

const CommonContainer = ({ children, maxH }) => {
  return (
    <Box
    overflowscroll="true"
      maxH={maxH}
      bg="secundary"
      p="2rem 1.5rem"
      mt="1rem"
      borderRadius="2rem"
    >
      {children}
    </Box>
  );
};

export default CommonContainer;
