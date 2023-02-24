import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
type StateType = {
  themeIsLight: boolean;
};

// initalState 생성
const initialState: StateType = { themeIsLight: true };

// 슬라이스생성
export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleTheme: (state: StateType) => {
      state.themeIsLight = !state.themeIsLight;
    },
  },
});

// 액션을 export 해준다.
export const { toggleTheme } = globalSlice.actions;

// 슬라이스를 export 해준다.
export default globalSlice;
