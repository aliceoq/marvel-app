/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryKey } from "@tanstack/react-query";
import axios, { AxiosRequestConfig, Method } from "axios";
import store from "../redux/store";
import md5 from "md5";

const api = axios.create({ baseURL: "https://gateway.marvel.com/v1/public/" });

export async function httpRequest(
  queryKey: QueryKey | (Method | string | AxiosRequestConfig<any>)[]
): Promise<any> {
  const [endpoint, method, additionalConfig] = queryKey;
  const url = `/${endpoint}`;
  const config = { method: method as Method, ...(additionalConfig as object) };

  const response = await api(url, config);

  return "data" in response ? response.data : response;
}

api.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    const { user } = store.getState();

    if (user.isAuthenticated && user.privateKey && user.publicKey) {
      const ts = new Date().getTime();
      config.params.ts = ts;
      config.params.apikey = user.publicKey;
      config.params.hash = md5(`${ts}${user.privateKey}${user.publicKey}`);
    }

    resolve(config);
  });
});

export default api;
