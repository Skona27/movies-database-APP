export type INavbarItem = "search" | "login" | "register";

export interface ISearchResults {
  totalCount: number;
  perPage: number;
  pageNumber: number;
  data: IMovie[];
  links: ILinks[];
}

export interface IMovie {
  id: number;
  title: string;
  description: string;
  genre: string;
  year: number;
  director: string;
  language: string;
  length: number;
  rate: string;
  created_at: string;
  modified_at: null | "string";
  links: ILinks[];
}

export interface ILinks {
  rel: string;
  method: string;
  href: string;
}

export interface IUser {
  id: number;
  firstName: string;
  token: string;
}
