// globalSlice.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  isDarkTheme: false,
  translateX:0,
};

export const UserDetailsSlice = createSlice({
  name: 'loggin',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setIsDarkTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
    setTranslateX: (state, action) => {
      state.translateX = action.payload;
    },
  },
});

export const {setIsAuthenticated, setIsAdmin,setIsDarkTheme,setTranslateX} = UserDetailsSlice.actions;
// export const isAuthenticated = (state) => state.user.isAuthenticated;

export default UserDetailsSlice.reducer;
