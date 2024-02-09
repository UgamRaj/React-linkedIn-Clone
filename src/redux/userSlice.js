import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  // signOut,
} from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";

//! Google auth provider

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginWithGoogle: () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    },
    LoginAPI: (state, { payload }) => {
      // console.log(payload);
      // state.user=payload
      return signInWithEmailAndPassword(auth, payload.email, payload.password);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginWithGoogle, LoginAPI } = userSlice.actions;

export default userSlice.reducer;
