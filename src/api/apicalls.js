import axios from "axios";

export const signUp = (user) => {
  return axios.post("/api/1.0/users", user, {
    timeout: 3,
  });
};

export const login = (user) => {
  return axios.post(
    "api/1.0/login",
    {},
    {
      timeout: 3,
      auth: user,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
};

export const login2 = (user) => {
  return axios.post("api/2.0/login", user, {
    timeout: 3,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });
};
