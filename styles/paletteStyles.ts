import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/store";

// let paletteNow: any;

// export const palette = () => {
//   paletteNow = useSelector((state: RootState) => state.global.themeIsLight);
//   console.log(paletteNow);

//   let palette;

//   if (paletteNow === true) {
//     palette = {
//       white: "#fff",
//       black: "#1b1c1d",
//       primary: "#2185d0",
//       gray: "#767676",
//       grayPoint1: "rgba(0, 0, 0, 0.1)",
//       grayPoint2: "rgba(0, 0, 0, 0.2)",
//       grayPoint4: "rgba(0, 0, 0, 0.4)",
//       grayPoint6: "rgba(0, 0, 0, 0.6)",
//       grayPoint8: "rgba(0, 0, 0, 0.8)",
//       lightGray: "#ececec",
//       background: "#f3f2ef",
//     };
//   } else {
//     palette = {
//       white: "#1b1c1d",
//       black: "#fff",
//       primary: "#2185d0",
//       gray: "#767676",
//       grayPoint1: "rgba(255, 255, 255, 0.1)",
//       grayPoint2: "rgba(255, 255, 255, 0.2)",
//       grayPoint4: "rgba(255, 255, 255,0.4)",
//       grayPoint6: "rgba(255, 255, 255, 0.6)",
//       grayPoint8: "rgba(255, 255, 255, 0.8)",
//       lightGray: "#ececec",
//       background: "#323232",
//     };
//   }

//   return palette;
// };

export const palette = {
  white: "#fff",
  black: "#1b1c1d",
  primary: "#2185d0",
  gray: "#767676",
  grayPoint1: "rgba(0, 0, 0, 0.1)",
  grayPoint2: "rgba(0, 0, 0, 0.2)",
  grayPoint4: "rgba(0, 0, 0, 0.4)",
  grayPoint6: "rgba(0, 0, 0, 0.6)",
  grayPoint8: "rgba(0, 0, 0, 0.8)",
  lightGray: "#ececec",
  background: "#f3f2ef",
};

export const paletteDark = {
  white: "#1b1c1d",
  black: "#fff",
  primary: "#2185d0",
  gray: "#767676",
  grayPoint1: "rgba(255, 255, 255, 0.1)",
  grayPoint2: "rgba(255, 255, 255, 0.2)",
  grayPoint4: "rgba(255, 255, 255,0.4)",
  grayPoint6: "rgba(255, 255, 255, 0.6)",
  grayPoint8: "rgba(255, 255, 255, 0.8)",
  lightGray: "#ececec",
  background: "#323232",
};
