import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Loader = () => {
  return (
    <Box
      position={"fixed"}
      top="50%"
      left={"50%"}
      transform={"translate(-50%,-50%)"}
    >
      <Image src="/Loader.svg" alt="Loader" />
    </Box>
  );
};
