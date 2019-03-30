import React from "react";
import { reducer, IAction } from "./reducers";
import { ISearchResults } from "./types";

interface IAppContext {
  searchResults: ISearchResults | null;
  dispatch: (action: IAction) => void;
}

const initialContext: IAppContext = {
  searchResults: null,
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
