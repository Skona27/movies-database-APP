import React from "react";
import axios, { AxiosResponse } from "axios";
import { ISearchResults } from "../types";
import { AppContext } from "../AppContext";
import { Input } from "../UI/Input";

export const Search: React.FC = React.memo(() => {
  const [value, setValue] = React.useState("");
  const { dispatch, user } = React.useContext(AppContext);

  const authHeaders = user ? { Authorization: `Bearer ${user.token}` } : {};

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setValue(event.target.value);

  React.useEffect(() => {
    async function fetchData() {
      const response: AxiosResponse = await axios.get(
        `http://localhost:3004/api/movies?search=${value}`,
        { headers: authHeaders }
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
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={value}
        onChange={handleInputChange}
        css={{ marginBottom: 0, width: "27.5rem" }}
      />
    </form>
  );
});

Search.displayName = "Search";
