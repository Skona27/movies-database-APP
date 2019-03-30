interface IAction {
  type: any;
  payload: any;
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "searchResults":
      return {...state, searchResults: action.payload};
    default:
      return state;
  }
};