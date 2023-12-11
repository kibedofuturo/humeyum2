import { Flex } from "@chakra-ui/react";

import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Banner from "../components/Banner";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <Flex h="full" direction="column" >
      <Navbar />
      <Flex h="100%" mx={71} direction="column" alignItems="center" justify="center">
        <SearchBar />
        <Banner />
        <Recipes /> 
      </Flex>
      <Footer/>
    </Flex>
  );
};

export default Home;
