import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  var url = window.location.href;

    if (error.message === "Network Error") {
      return Promise.reject(new Error("Erro de conexão"));
    }

    if (error.response?.status === 401 && url.indexOf("/login") === -1) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
}