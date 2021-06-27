import { Dispatch } from "react";
import * as FileSystem from "expo-file-system";
import { Database } from "../../../db";
import {
  ETypes,
  IAddPost,
  IDeletePost,
  IFetchPosts,
  IToggleBooked,
  TState,
} from "./types";

export const deletePost = (payload: string): IDeletePost => ({
  type: ETypes.DELETE_POST,
  payload,
});

export const fetchPosts = () => async (dispatch: Dispatch<IFetchPosts>) => {
  const payload = (await Database.getData()) as TState["data"];

  dispatch({
    type: ETypes.FETCH_POST,
    payload,
  });
};

export const toggleBooked = (payload: string): IToggleBooked => ({
  type: ETypes.TOGGLE_BOOKED,
  payload,
});

export const addPost =
  (title: string, imgUrl: string) => async (dispatch: Dispatch<IAddPost>) => {
    const fileName = imgUrl.split("/").pop();
    const newPath = FileSystem.documentDirectory + (fileName || "");

    try {
      await FileSystem.moveAsync({
        from: imgUrl,
        to: newPath,
      });
    } catch (e) {
      console.log(e);
    }

    const data = {
      img: imgUrl,
      text: title,
      date: new Date().toJSON(),
      booked: 0,
    };

    const id = (await Database.addPost(data)) as string;

    dispatch({
      type: ETypes.ADD_POST,
      payload: { ...data, booked: false, id },
    });
  };
