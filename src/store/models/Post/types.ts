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
  SET_POSTS = "post/SET_POSTS",
}

export interface ISetPosts extends Action<ETypes.SET_POSTS> {
  payload: TState["data"];
}

export type TAction = ISetPosts;

export type TState = ICommonState<IPost[]>;
