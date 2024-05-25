import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AppState {
  loading: number;
  token: string;
  signupDetails: {
    type: string;
  };
  transAdd: boolean;
  transaction: any;
  user: any;
  splash: boolean;
  photo: string | null;
}
const initialState: AppState = {
  loading: 0,
  token: "",
  signupDetails: {
    type: "register",
  },
  transAdd: false,
  transaction: { amount: "0.00" },
  user: {},
  splash: true,
  photo: null,
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
    createTransaction: (state) => {
      state.transAdd = true;
      state.transaction = {
        bankName: "CIBC-LC",
        recipient: "Richard Q",
        type: "Deposit",
        time: "11:47 AM",
        amount: "160.00",
      };
    },
    logout: (state) => {
      state.user = undefined;
      state.token = "";
    },
    splashDone: (state) => {
      state.splash = false;
    },
    capturePhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { logout, setSignupDetails, signIn, createTransaction, splashDone, capturePhoto } =
  authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
