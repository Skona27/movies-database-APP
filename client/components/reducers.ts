import { ISearchResults, INavbarItem } from "./types";

export interface IAction {
  type: "searchResults" | "activeNavbar";
  payload: ISearchResults | INavbarItem;
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "searchResults":
      return { ...state, searchResults: action.payload };
    case "activeNavbar":
      return { ...state, activeNavbar: action.payload };
    default:
      return state;
  }
};
