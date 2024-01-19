import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/userSlice";
import store from "../redux/store";

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="privatekey"
          placeholder="Private key"
          value={privateKey}
          required
          onChange={(e) => setPrivateKey(e.currentTarget.value)}
        />
        <input
          name="publickey"
          placeholder="Public key"
          value={publicKey}
          required
          onChange={(e) => setPublicKey(e.currentTarget.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}

export default Auth;
