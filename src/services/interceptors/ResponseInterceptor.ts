import { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {

  if (response.status === 201) {
    window.location.href = "/";
  }

  return response;
}