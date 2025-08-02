import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface StateType {
  themeIsLight: boolean;
  tutorialOrder: number;
}

// initalState 생성
const initialState: StateType = {
  themeIsLight: true,
  tutorialOrder: 0,
};

// 슬라이스생성
export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleTheme: (state: StateType) => {
      state.themeIsLight = !state.themeIsLight;
    },
    tutorialOrderUpdate: (state: StateType) => {
      state.tutorialOrder = state.tutorialOrder + 1;
    },
  },
});

// 액션을 export 해준다.
export const { toggleTheme, tutorialOrderUpdate } = globalSlice.actions;

// 슬라이스를 export 해준다.
export default globalSlice;
