import { STATUS } from "./constants";
import { TState as TPostsState } from "./models/Post/types";

export type TStatus = keyof typeof STATUS;

export interface ICommonState<T> {
  data: T;
  status: TStatus;
}

interface IAction<T, P> {
  readonly type: T;
  readonly payload: P;
}

interface IAnyAction extends IAction<string, unknown> {}

interface IHandler<S, P, R> {
  (state: S, payload: P): R;
}

export interface IRootState {
  posts: TPostsState;
}

export interface Reducer<S> extends IHandler<S | undefined, IAnyAction, S> {}
