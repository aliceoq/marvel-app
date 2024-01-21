import { AxiosError } from "axios";
import { Container } from "./styles";

interface Props {
  error: AxiosError;
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <Container>
      <h2>Oops.</h2>
      <h3>Erro {error.response?.status}</h3>
      <p>
        {error.response?.status === 401
          ? "Verifique se as chaves da API estão corretas."
          : error.message}
      </p>
    </Container>
  );
};

export default ErrorMessage;
