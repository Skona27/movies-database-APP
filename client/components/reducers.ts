import { ISearchResults } from "./types";

export interface IAction {
  type: "searchResults";
  payload: ISearchResults;
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "searchResults":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
