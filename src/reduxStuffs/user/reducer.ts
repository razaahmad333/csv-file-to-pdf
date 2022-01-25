import { Action } from "./actions";
export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface UserState {
  currentUser: User;
  loggedIn: boolean;
}

export const initialState: UserState = {
  currentUser: {
    id: "",
    email: "",
    name: "",
    password: "",
  },
  loggedIn: !true,
};

export function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: false,
      };

    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };

    default:
      return state;
  }
}
