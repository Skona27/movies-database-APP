import { ISearchResults, INavbarItem, IUser } from "./types";

export interface IAction {
  type: "searchResults" | "activeNavbar" | "loginUser" | "logoutUser";
  payload?: ISearchResults | INavbarItem | IUser;
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "searchResults":
      return { ...state, searchResults: action.payload };
    case "activeNavbar":
      return { ...state, activeNavbar: action.payload };
    case "loginUser":
      return { ...state, user: action.payload };
    case "logoutUser":
      return { ...state, user: null };
    default:
      return state;
  }
};
