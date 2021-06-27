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
  FETCH_POST = "post/FETCH_POST",
}

export interface IDeletePost extends Action<ETypes.DELETE_POST> {
  payload: string;
}

export interface IFetchPosts extends Action<ETypes.FETCH_POST> {
  payload: IPost[];
}

export interface IAddPost extends Action<ETypes.ADD_POST> {
  payload: IPost;
}

export interface IToggleBooked extends Action<ETypes.TOGGLE_BOOKED> {
  payload: string;
}

export type TAction = IDeletePost | IToggleBooked | IAddPost | IFetchPosts;

export type TState = ICommonState<IPost[]>;
