import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AppState {
  loading: number;
  token: string;
  signupDetails: {
    type: string;
  };
  user: any;
}
const initialState: AppState = {
  loading: 0,
  token: "",
  signupDetails: {
    type: "register",
  },
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupDetails: (
      state,
      action: PayloadAction<{
        type: "register" | "phone" | "email";
        otp?: string;
        number?: string;
        email?: string;
      }>,
    ) => {
      state.signupDetails = action.payload;
    },
    signIn: (state) => {
      state.token = "Loggedin";
    },
    logout: (state) => {
      state.user = undefined;
      state.token = "";
    },
  },
});

export const { logout, setSignupDetails, signIn } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
