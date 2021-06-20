import { Platform } from "react-native";

export interface IPost {
  readonly id: string;
  img: string;
  text: string;
  date: string;
  booked: boolean;
}

export const DATA: Array<IPost> = [
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
];

export const isAndroid = () => Platform.OS === "android";

export const THEME = {
  MAIN_COLOR: "#303f9f",
  DANGER_COLOR: "#d81b60",
  HORIZONTAL_PADD: 15,
};
