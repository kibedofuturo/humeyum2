import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Flex mx={71} direction="column">
      <Heading pb={45}>
        Sobre nós
      </Heading>

      <Flex w={"full"} gap={5} wrap={"wrap"} align="center" justify="center">
        <Image width={225} height={200} src="Coutinho.svg" />
        <Image width={225} height={200} src="Santos.svg" />
        <Image width={225} height={200} src="Esther.svg" />
        <Image width={225} height={200} src="Yuri.svg" />
        <Image width={225} height={200} src="Joca.svg" />
      </Flex>

      <Flex gap={3} w={"full"} justify={"center"} my={45}>
        <Text fontSize="xl" textAlign="center" p={5}>
          1.Aplicativo voltado para redução de consumo
        </Text>
        <Text fontSize="xl" textAlign="center" p={5}>
          2.Desenvolvido por alunos de Sistemas para Internet - UNICAP
        </Text>
        <Text fontSize="xl" textAlign="center" p={5}>
          3.Incentivo de alimentação saudável no dia a dia{" "}
        </Text>
      </Flex>

      <Text fontSize="4xl" textAlign='center' w='full'>
        O Homeyun é um aplicativo que nasceu da necessidade de fazer comida sem
        precisar comprar novos alimentos no mercado, utilizando apenas o que já
        tem em casa, inovando o jeito de cozinhar, ajudando as pessoas a
        aprenderem novas receitas e evitando o disperdício.
      </Text>
    </Flex>
  );
}
