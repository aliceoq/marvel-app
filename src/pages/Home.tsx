import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/userSlice";

function Auth() {
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    dispatch(
      authenticateUser({
        publicKey: event.currentTarget.publickey.value,
        privateKey: event.currentTarget.privatekey.value,
      })
    );
    event.currentTarget.publickey.value = "";
    event.currentTarget.privatekey.value = "";
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="privatekey" placeholder="Private key" required />
        <input name="publickey" placeholder="Public key" required />
        <button>Send</button>
      </form>
    </>
  );
}

export default Auth;
