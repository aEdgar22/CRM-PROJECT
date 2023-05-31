import React from "react";
import { Box, Link, Flex, useMediaQuery, Text, VStack } from "@chakra-ui/react";
import { routes } from "../routes/routes";
import { AiOutlineUser, AiOutlineCheckSquare } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'AiOutlineUser':
        return <AiOutlineUser color="white" size='1.5rem' />;
      case "AiOutlineCheckSquare":
        return <AiOutlineCheckSquare color="white" size='1.5rem' />;
      case 'BiCommentDetail':
        return <BiCommentDetail color="white" size='1.5rem' />;
      default:
        return null;
    }
  };

  const links = (
    <Flex
      direction={isLargerThan768 ? "column" : "row"}
      justifyContent={isLargerThan768 ? "space-between" : "space-evenly"}
      width="full"
      height="full"
      alignItems='center'
    > 
      {routes.map((route) => (
        <Link key={route.path} href={route.path}>
          <VStack>
            {route.icon && renderIcon(route.icon)}
            <Text color='whiteColor' fontSize='sm'>{route.name}</Text>
          </VStack>
        </Link>
      ))}
    </Flex>
  );

  return (
    <Box>
      <Box
        h={isLargerThan768 && "100%"}
        display={{ base: "none", md: "block" }}
        position="fixed"
        left={0}
        p={5}

      >
        {links}
      </Box>
      <Flex
        bg="primary"
        position="fixed"
        bottom={0}
        width="full"
        height="5rem"
        p={5}
        display={{ base: "flex", md: "none" }}
        borderTopLeftRadius="2xl"
        borderTopRightRadius="2xl"
      >
        {links}
      </Flex>
    </Box>
  );
};

export default Navbar;
