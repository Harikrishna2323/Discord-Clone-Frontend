import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:4500/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const { token } = JSON.parse(userDetails);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//public routes
export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    console.log(exception?.message);
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    console.log(data);
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCode(exception);

    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendRequest = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendRequest = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
