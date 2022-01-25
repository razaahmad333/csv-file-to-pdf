import { User } from "./reducer";
export type Action = {
  type: string;
  payload?: any;
};

export const createUser = (user: User): Action => ({
  type: "CREATE_USER",
  payload: user,
});

export const loginUser = (user: User): Action => ({
  type: "LOGIN_USER",
  payload: user,
});
