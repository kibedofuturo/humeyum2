import {
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      bgColor={"#EFEFEF"}
      color={"#000000"}
      p={5}
      gap={3}
      align="center"
      w="full"
    >
      <Link to="/home"  cursor="pointer">
        <Image src="homeyum.svg" alt="" />
      </Link>

      <Link to="/home"  cursor="pointer">
        <Heading
          css={{
            fontFamily: "Kavoon, sans-serif",
          }}
        >
          Homeyum
        </Heading>
      </Link>

      <List flex="1">
        <Flex justify="space-around" fontSize="xl" fontWeight="700">
          <ListItem>
            <Link to="/receitas"  cursor="pointer">
              Receitas
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/feed"  cursor="pointer">Feed</Link>
          </ListItem>

          <ListItem>
            <Link to="/mercado"  cursor="pointer">Mercado</Link>
          </ListItem>

          <ListItem></ListItem>

          <ListItem display="flex" gap={2}>
            <Image src="user.svg" alt="" w={25} />
            <Link to="/"  cursor="pointer">
              Seu Perfil
            </Link>
          </ListItem>
        </Flex>
      </List>
    </Flex>
  );
}
