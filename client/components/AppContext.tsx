import React from "react";
import { reducer, IAction } from "./reducers";
import { ISearchResults, INavbarItem, IUser } from "./types";

interface IAppContext {
  activeNavbar: INavbarItem;
  searchResults: ISearchResults | null;
  user: IUser | null;
  dispatch: (action: IAction) => void;
}

const initialContext: IAppContext = {
  activeNavbar: "search",
  searchResults: null,
  user: null,
  // @ts-ignore
  dispatch: action => {}
};

export const AppContext = React.createContext(initialContext);

export const AppContextProvider: React.FC = React.memo(({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
});

AppContextProvider.displayName = "AppContextProvider";
