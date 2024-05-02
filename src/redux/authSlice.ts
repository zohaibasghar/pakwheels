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
  },
});

export const { logout, setSignupDetails, signIn, createTransaction } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
