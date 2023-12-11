import { useState, useContext } from "react";
import {
  Flex,
  Heading,
  Image,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const SingUp = () => {
  const navigate = useNavigate();

  const { handleRegister } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmailError(confirmedEmail !== value);
    setEmail(value);
  };

  const handleConfirmedEmailChange = (event) => {
    const value = event.target.value;
    setConfirmedEmail(value);
    setEmailError(confirmedEmail !== value);
    setEmailError(email !== value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(confirmedPassword !== value);
  };

  const handleConfirmedPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmedPassword(value);
    setPasswordError(password !== value);
  };

  const clearForm = () => {
    setPasswordError("");
    setEmail("");
    setConfirmedEmail("");
    setPassword("");
    setConfirmedPassword("");
    setEmailError(false);
    setPassword(false);
  };

  const sign = async () => {
    const result = await handleRegister(email, password, username);

    if (result) {
      navigate("/");
    } else {
      alert("Falha");
    }

    clearForm();
  };

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

        <Flex flex="1" align="center" flexDirection="column">
          <Flex p="10">
            <Heading fontSize="2xl" color="#FEFEFE" pr="2">
              Já possui uma conta?
            </Heading>

            <Heading fontSize="2xl" color="#FEFEFE" textDecoration="underline">
              <Link to="/">Sign in</Link>
            </Heading>
          </Flex>

          <Flex width="full" height="full">
            <Formik initialValues={{ username: "", email: "", password: "", confirmedEmail: "", confirmedPassword: "" }} onSubmit={sign}>
              <Form>
                <Flex flexDirection="column" px="10">
                  <FormLabel color="#FEFEFE">Nome</FormLabel>
                  <Input
                    mb="2"
                    type="text"
                    color="#FEFEFE"
                    name="name"
                    onChange={handleUsernameChange}
                    value={username || ""}
                  />

                  <FormLabel color="#FEFEFE">Email</FormLabel>
                  <Input
                    mb="2"
                    type="email"
                    color="#FEFEFE"
                    name="email"
                    onChange={handleEmailChange}
                    value={email || ""}
                    error={emailError.toString()}
                  />

                  <FormLabel color="#FEFEFE">Confirmar Email</FormLabel>
                  <Input
                    mb="2"
                    type="email"
                    color="#FEFEFE"
                    name="email"
                    onChange={handleConfirmedEmailChange}
                    value={confirmedEmail || ""}
                    error={emailError.toString()}
                  />

                  <Flex gap={4}>
                    <div>
                      <FormLabel color="#FEFEFE">Senha</FormLabel>
                      <Input
                        mb="2"
                        type="password"
                        color="#FEFEFE"
                        name="password"
                        onChange={handlePasswordChange}
                        value={password || ""}
                        error={passwordError.toString()}
                      />
                    </div>

                    <div>
                      <FormLabel color="#FEFEFE">Confirmar senha</FormLabel>
                      <Input
                        mb="2"
                        type="password"
                        color="#FEFEFE"
                        name="confirmPassword"
                        onChange={handleConfirmedPasswordChange}
                        value={confirmedPassword || ""}
                        error={passwordError.toString()}
                      />
                    </div>
                  </Flex>

                  <Button
                    type="submit"
                    bg="#2B3F55"
                    color="#FEFEFE"
                    size="lg"
                    mt={2}
                  >
                    Sign up
                  </Button>
                </Flex>
              </Form>
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingUp;
