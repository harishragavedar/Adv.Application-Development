import axios from "axios";
import instance from "./axios";

const api_uri ="http://localhost:8181";

export const login=(data)=>axios.post(`${api_uri}/api/v1/auth/login`,data);
export const register=(data)=>axios.post(`${api_uri}/api/v1/auth/register`,data);
export const logout=()=>instance.post(`${api_uri}/api/v1/auth/logout`);
export const forgotPassword=(data)=>axios.patch(`${api_uri}/api/v1/auth/forgot-password`,data);
export const applyLoan = (data) => instance.post(`${api_uri}/api/v1/auth/applyLoan`, data);
export const getPendingLoans=()=>instance.post(`${api_uri}/api/v1/auth/getPendingLoans`);
export const getUsers=()=>axios.get(`${api_uri}/api/v1/user/get`);



