import React from "react";
import { reducer } from "./reducers";

interface IAppContext {
  searchResults: [];
  dispatch: (action) => void;
}

const initialContext: IAppContext = {
  searchResults: [],
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
