import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
export interface StateType {
  themeIsLight: boolean;
  tutorialhasRead: boolean;
}

// initalState 생성
const initialState: StateType = { themeIsLight: true, tutorialhasRead: false };

// 슬라이스생성
export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleTheme: (state: StateType) => {
      state.themeIsLight = !state.themeIsLight;
    },
    closeTutorialBlock: (state: StateType) => {
      state.tutorialhasRead = true;
    },
  },
});

// 액션을 export 해준다.
export const { toggleTheme, closeTutorialBlock } = globalSlice.actions;

// 슬라이스를 export 해준다.
export default globalSlice;
