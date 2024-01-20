/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { httpRequest } from "./services/api";
import {
  QueryClient,
  QueryClientProvider,
  type QueryKey,
} from "@tanstack/react-query";
import { AxiosRequestConfig, Method } from "axios";
import Router from "./Router";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { shouldForwardProp } from "./utils/theme";

function App() {
  const { theme } = useSelector((state: any) => state.theme);

  const defaultQueryFn = ({
    queryKey,
  }: {
    queryKey: QueryKey | (Method | string | AxiosRequestConfig<any>)[];
  }): void | Promise<any> => {
    if (!queryKey || !queryKey.length) return;

    return httpRequest(queryKey);
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: defaultQueryFn,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Router />
        </StyleSheetManager>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
