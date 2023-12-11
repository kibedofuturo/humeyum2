import { Flex, Heading } from "@chakra-ui/react";
import VerticalCard from "./VerticalCard";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";

export default function Recipes() {
  const [receitas, setReceitas] = useState();

  useEffect(() => {
    firestore.collection("receitas").onSnapshot((item) => {
      const receitas = [];
      item.forEach((doc) => {
        const receita = doc.data();
        receitas.push(receita);
      });
      setReceitas(receitas);
    });
    console.log(receitas);
  }, []);

  return (
    <Flex direction={"column"} pb={150} justify="center" w="100%">
      <Heading pb={45}>Recomendações do Dia:</Heading>
      <Flex w="full" gap={8} wrap="wrap" justifyContent="space-between">
        {receitas &&
          receitas.map((receita, index) => (
            <VerticalCard
              key={index}
              src={receita.url}
              alt={"asdkaskd"}
              content={receita.nome}
            />
          ))}
      </Flex>
    </Flex>
  );
}
