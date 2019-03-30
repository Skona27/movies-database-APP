import React from "react";
import { useTheme } from "../../hooks/Theme";
import axios, { AxiosResponse } from "axios";
import { ISearchResults } from "../types";
import { AppContext } from "../AppContext";

interface IProps {}

export const Search: React.FC<IProps> = React.memo(() => {
  const { colors } = useTheme();
  const [value, setValue] = React.useState("");
  const { dispatch } = React.useContext(AppContext);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setValue(event.target.value);

  React.useEffect(() => {
    async function fetchData() {
      const response: AxiosResponse = await axios.get(
        `http://192.168.1.34:3001/api/movies?search=${value}`
      );
      const searchResults: ISearchResults = response.data;
      dispatch({ type: "searchResults", payload: searchResults });
    }
    fetchData();
  }, [value]);

  return (
    <form
      css={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <input
        type="text"
        placeholder="Search a movie..."
        value={value}
        onChange={handleInputChange}
        css={{
          padding: ".5rem .75rem",
          width: "27.5rem",
          fontSize: "1rem",
          fontWeight: 400,
          borderRadius: 2,
          border: "none",
          outlineColor: colors.black,
          color: colors.black,
          backgroundColor: colors.white
        }}
      />
    </form>
  );
});

Search.displayName = "Search";
