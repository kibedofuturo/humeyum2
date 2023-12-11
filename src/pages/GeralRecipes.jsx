import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";

const GeralRecipes = () => {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex direction="column" h="100%" mx={71} textAlign="justify">
        <Heading color="#43738E" py={5}>
          Receitas de Bolo
        </Heading>
        <Text fontSize="xl">
          Hmm! De um clássico até o mais refinado, quem consegue resistir a um
          bolo delicioso e fácil de preparar?
        </Text>
        <br />
        <Text fontSize="xl">
          As receitas de bolos são autênticos tesouros culinários, capazes de
          proporcionar alegria e satisfação a qualquer hora do dia. Confeccionar
          um bolo em casa é uma experiência recompensadora, repleta de amor,
          criatividade e um toque pessoal. E o aroma que permeia a cozinha
          enquanto o bolo assa no forno é verdadeiramente irresistível.
          Portanto, prepare-se para adoçar sua vida e embarque nesse universo
          encantador.
        </Text>
        <Image src="FoodBanner.svg" w="100%" my={47}></Image>

        <Recipes/>
      </Flex>
      <Footer/>
    </Flex>
  );
};

export default GeralRecipes;
