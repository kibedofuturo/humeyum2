import { createContext, useState } from "react";
import { auth, firestore } from "../../firebase";
import { toast } from "react-toastify";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [userData, setUserData] = useState(false);

  const userAuth = async (email, password) => {
    let threwError = false;
    await auth.signInWithEmailAndPassword(email, password).catch((error) => {
      threwError = true;
    });

    if (!threwError) {
      toast.success("Login efetuado com sucesso!");

      const userId = auth.currentUser.uid;
      localStorage.setItem("id", JSON.stringify(userId));

      const docRef = await firestore.collection("users").doc(userId).get();

      const docData = docRef.data();
      console.log(docData);

      setUserData(docData);

      return true;
    } else {
      toast.warning("Senha incorreta ou usuário inválido!");
      return false;
    }
  };

  const handleRegister = async (email, password, username) => {
    if (email.length === 0) {
      toast.warning("Por favor, insira seu e-mail");
      return;
    }

    if (password.length === 0) {
      toast.warning("Por favor, insira sua senha");
      return;
    }

    let signUpError = false;

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error.message);
        signUpError = true;
      })
      .then(() => {
        firestore
          .collection("users")
          .doc(auth.currentUser.uid)
          .set({
            userId: auth.currentUser.uid,
            email: email,
            username: username,
          })
          .catch((error) => {
            alert(error.message);
          });
      });

    if (!signUpError) {
      toast.success("Cadastro realizado com sucesso!");
      return true;
    } else {
      toast.warning("Não foi possível concluir o cadastro.");
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userAuth,
        handleRegister,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
