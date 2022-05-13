import { ParsedUrlQuery } from "querystring"; // from node

import { SeasonEnum } from "@src/__generated__/graphql";

import type { SearchProps } from "./types";

export const getSearchParams = (query: ParsedUrlQuery): SearchProps => {
  return {
    season:
      typeof query.season === "string" ? (query.season as SeasonEnum) : null,
    availableBeds:
      typeof query.availableBeds === "string"
        ? parseInt(query.availableBeds)
        : null,
    baths: typeof query.baths === "string" ? parseInt(query.baths) : null,
  };
};
