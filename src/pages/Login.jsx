import { useContext, useState } from "react";
import {
  Flex,
  Image,
  Heading,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

const Login = () => {
  const { userAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function auth() {
    console.log('Calling auth function');
    console.log('userAuth:', userAuth);
    const result = await userAuth(email, password);

    result ? navigate("/home") : console.log("Fail");
  }

  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      align="center"
      bg="#4D5172"
    >
      <Flex bg="#9cb1ca" w="80%" h="80%" borderRadius="2xl" boxShadow="2xl">
        <Image
          src="LoginImg.png"
          w="50%"
          h="100%"
          flex="1"
          borderLeftRadius="2xl"
        ></Image>
        <Flex flex="1" justify="center">
          <Flex direction="column" justify="center" align="center">
            <Heading color="white" fontSize="xl" my="25">
              Bem Vindo!
            </Heading>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={auth}>
              <Form>
                <Flex direction="column">
                <FormLabel color="white">Login</FormLabel>
                <Input
                  type="email"
                  color="white"
                  mb={8}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                />

                <FormLabel color="white">Senha</FormLabel>
                <Input
                  type="password"
                  color="white"
                  mb={8}
                  onChange={(event) => setPassword(event.target.value)}
                  name="senha"
                />

                <Button
                  type="submit" bg="#2B3F55" size="lg" color="#FEFEFE"
                >
                  sing in
                </Button>
                </Flex>
              </Form>
            </Formik>
            <Link to="/signup" cursor="pointer">
              <Text
                textDecoration="underline"
                color="#2B3F55"
                fontWeight="bold"
                p={2}
              >
                cadastre-se
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
