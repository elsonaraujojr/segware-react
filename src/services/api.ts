import axios from 'axios';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJlbHNvbmFyYXVqb2pyIiwiaWF0IjoxNjUwNTU2NTgxLCJleHAiOjE2NTA1NjAxODF9.5Mn9gAbyVUzxv_1_BYQZwcgDJMpDn9C1Xib0nobTmvw";

const baseUrlApi = "https://segware-book-api.segware.io/api";

export const authAxios = axios.create({
  baseURL: baseUrlApi,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});