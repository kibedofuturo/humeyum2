import { Flex, List, ListItem, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex bg="#4D5172" w="100%" px="10%" py="15px">
      <List color="#FEFEFE" flex="1" fontSize="l">
        <ListItem fontWeight="extrabold" py="2">
          Receita
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Fácil e Rápido</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Massas</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Bolos</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Saladas</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Sobremesas</Link>
        </ListItem>
      </List>
      <List color="#FEFEFE" flex="1" fontSize="l">
        <ListItem fontWeight="extrabold" py="2">
          Ajuda
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Planeje Sua Semana</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Livros de Culinária</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Sobre HomeYum</Link>
        </ListItem>
        <ListItem textDecoration="none" py="2">
          <Link>Fale Comigo</Link>
        </ListItem>
      </List>
      <Flex flex="1" direction="column">
        <Heading fontSize="l" color="white">
          Nos siga:
        </Heading>
        <Flex gap="2" py="4">
          <Image w={46} h={46} src="instagram.svg" />
          <Image w={46} h={46} src="facebook.svg" />
          <Image w={46} h={46} src="youtube.svg" />
          <Image w={46} h={46} src="pinterest.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
}
