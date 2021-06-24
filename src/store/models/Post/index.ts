import { produce, Draft } from "immer";

import { STATUS } from "../../constants";
import { TState, TAction, ETypes } from "./types";

const initialState: TState = {
  data: [
    {
      id: "1",
      img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
      text: "Токио - соверешенно другой мир",
      date: new Date().toJSON(),
      booked: true,
    },
    {
      id: "2",
      img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
      text: "Лондон - псс не хочешь немного чая?",
      date: new Date().toJSON(),
      booked: true,
    },
    {
      id: "3",
      img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
      text: "Токио - соверешенно другой мир",
      date: new Date().toJSON(),
      booked: false,
    },
    {
      id: "4",
      img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
      text: "Лондон - псс не хочешь немного чая?",
      date: new Date().toJSON(),
      booked: false,
    },
    {
      id: "5",
      img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
      text: "Токио - соверешенно другой мир",
      date: new Date().toJSON(),
      booked: false,
    },
  ],
  status: STATUS.initial,
};

export const postReducer = produce((draft: Draft<TState>, action: TAction) => {
  if (action.type === ETypes.DELETE_POST) {
    draft.data = draft.data.filter(item => item.id !== action.payload);
  } else if (action.type === ETypes.TOGGLE_BOOKED) {
    draft.data = draft.data.map(item => {
      if (item.id === action.payload) {
        item.booked = !item.booked;
      }
      return item;
    });
  }
}, initialState);
