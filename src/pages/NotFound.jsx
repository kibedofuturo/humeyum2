import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Flex h="100vh" direction="column">
      <Flex height="100%" align="center" justify="center" direction="column">
        <h1>Oops! You seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <Link to="/" cursor="pointer" textDecor="underline">
          Login
        </Link>
        <Link to="/home" cursor="pointer" textDecor="underline">
          Home
        </Link>
      </Flex>
    </Flex>
  );
}
