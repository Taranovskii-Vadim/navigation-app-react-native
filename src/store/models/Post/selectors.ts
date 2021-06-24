import { createSelector } from "reselect";

import { IRootState } from "../../types";
import { TState } from "./types";

const getBase = (state: IRootState): TState => state.posts;

export const selectPosts = createSelector(getBase, state => state.data);

export const selectPostsStatus = createSelector(getBase, state => state.status);
