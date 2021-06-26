import { Action } from "redux";
import { ICommonState } from "../../types";

export interface IPost {
  readonly id: string;
  img: string;
  text: string;
  date: string;
  booked: boolean;
}

export enum ETypes {
  DELETE_POST = "post/DELETE_POST",
  TOGGLE_BOOKED = "post/TOGGLE_BOOKED",
  ADD_POST = "post/ADD_POST",
}

export interface IDeletePost extends Action<ETypes.DELETE_POST> {
  payload: string;
}

export interface IAddPost extends Action<ETypes.ADD_POST> {
  payload: { title: string; imgUrl: string };
}

export interface IToggleBooked extends Action<ETypes.TOGGLE_BOOKED> {
  payload: string;
}

export type TAction = IDeletePost | IToggleBooked | IAddPost;

export type TState = ICommonState<IPost[]>;
