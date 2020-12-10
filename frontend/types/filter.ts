import { OrderingState } from "./ordering";

export type FilterKeys = "" | "length" | "genre" | "year";

export type FilterFormData = {
  [key in Genres]: boolean;
};

export const CHANGE_FILTER = "CHANGE_FILTER";

export type FilterAction = { type: string; payload: FilterState };

export type FilterState = {
  genres: { [key in Genres]: boolean };
};
export type FilteringState = {
  filter: FilterState;
  ordering: OrderingState;
};

export type Genres =
  | "Action"
  | "Comedy"
  | "Musical"
  | "Romance"
  | "Drama"
  | "Horror";
