import axios from 'axios';

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJlbHNvbmFyYXVqb2pyIiwiaWF0IjoxNjUwNTY2ODQzLCJleHAiOjE2NTA1NzA0NDN9.JgcIMC9_FdjWZTAZybKXGshxeNfvyHvhUOg7A3X6_qc";

const baseUrlApi = "https://segware-book-api.segware.io/api";

export const authAxios = axios.create({
  baseURL: baseUrlApi,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});