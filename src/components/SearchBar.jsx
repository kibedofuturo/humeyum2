import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Flex py={50} px={120} w='full'>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Pesquisar Receitas" borderRadius={20}/>
      </InputGroup>
    </Flex>
  );
}
