import cloneDeep from "lodash/cloneDeep";

import { SeasonEnum } from "@src/__generated__/graphql";

import { SearchActionType, SearchProps } from "./types";

export const reducer = (
  state: SearchProps,
  action: SearchActionType
): SearchProps => {
  switch (action.type) {
    case "season":
      return { ...cloneDeep(state), season: action.value as SeasonEnum };
    case "availableBeds":
      return { ...cloneDeep(state), availableBeds: parseInt(action.value) };
    case "baths":
      return { ...cloneDeep(state), baths: parseInt(action.value) };
    default:
      throw new Error("Invalid action type");
  }
};
