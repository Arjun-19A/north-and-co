import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

const getToken = () => {
  try {
    const userAuth = JSON.parse(localStorage.getItem("auth")) || {};

    const adminAuth = JSON.parse(localStorage.getItem("adminAuth")) || {};

    return {
      userToken: userAuth.token,
      adminToken: adminAuth.token,
    };
  } catch (error) {
    return {
      userToken: null,
      adminToken: null,
    };
  }
};

api.interceptors.request.use((config) => {
  try {
    const { userToken, adminToken } = getToken();

    let token;

    if (config.url?.includes("/admin")) {
      token = adminToken;
    } else {
      token = userToken;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error(error);
  }

  return config;
});

let isUserRefreshing = false;
let isAdminRefreshing = false;

let userQueue = [];
let adminQueue = [];

const processQueue = (queue, error, token = null) => {
  queue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  queue.length = 0;
};

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token") &&
      !originalRequest.url.includes("/logout") &&
      !originalRequest.url.includes("/login") &&
      !originalRequest.url.includes("/register")
    ) {
      const isAdminRequest = originalRequest.url.includes("/admin");

      const refreshing = isAdminRequest ? isAdminRefreshing : isUserRefreshing;

      const queue = isAdminRequest ? adminQueue : userQueue;

      if (refreshing) {
        return new Promise((resolve, reject) => {
          queue.push({
            resolve,
            reject,
          });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;

          return api(originalRequest);
        });
      }

      originalRequest._retry = true;

      if (isAdminRequest) {
        isAdminRefreshing = true;
      } else {
        isUserRefreshing = true;
      }

      try {
        const refreshUrl = isAdminRequest
          ? "/api/admin/refresh-token"
          : "/api/user/refresh-token";

        const response = await api.post(refreshUrl);

        const newAccessToken = response.data.accessToken;

        const storageKey = isAdminRequest ? "adminAuth" : "auth";

        const auth = JSON.parse(localStorage.getItem(storageKey));

        if (auth) {
          auth.token = newAccessToken;

          localStorage.setItem(storageKey, JSON.stringify(auth));
        }

        processQueue(queue, null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        processQueue(queue, err, null);

        return Promise.reject(err);
      } finally {
        if (isAdminRequest) {
          isAdminRefreshing = false;
        } else {
          isUserRefreshing = false;
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
