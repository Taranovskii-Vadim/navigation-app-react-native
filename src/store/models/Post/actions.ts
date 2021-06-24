import { ETypes, IDeletePost, IToggleBooked } from "./types";

export const deletePost = (payload: string): IDeletePost => ({
  type: ETypes.DELETE_POST,
  payload,
});

export const toggleBooked = (payload: string): IToggleBooked => ({
  type: ETypes.TOGGLE_BOOKED,
  payload,
});
