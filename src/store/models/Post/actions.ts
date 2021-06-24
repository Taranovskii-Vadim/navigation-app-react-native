import { ETypes, ISetPosts, TState } from "./types";

export const setPosts = (payload: TState["data"]): ISetPosts => ({
  type: ETypes.SET_POSTS,
  payload,
});
