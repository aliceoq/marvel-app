import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/userSlice";
import store from "../../redux/store";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { Form } from "./styles";

function Auth() {
  const { user } = store.getState();
  const [privateKey, setPrivateKey] = useState(user.privateKey);
  const [publicKey, setPublicKey] = useState(user.publicKey);
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    dispatch(authenticateUser({ publicKey, privateKey }));

    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        label="Chave privada"
        value={privateKey}
        required
        onChange={(e) => setPrivateKey(e.currentTarget.value)}
      />
      <TextInput
        label="Chave pública"
        value={publicKey}
        required
        onChange={(e) => setPublicKey(e.currentTarget.value)}
      />
      <Button fullWidth={true}>Confirmar</Button>
    </Form>
  );
}

export default Auth;
