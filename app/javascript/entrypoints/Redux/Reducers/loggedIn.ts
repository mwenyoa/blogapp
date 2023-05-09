import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../Services/User";


type userLogin = {
    loggedin: {},
    isLoaded: 'idle' | 'pending' | 'succeeded' | 'failed' 
}

const initialState = {
    loggedin: {},
    isLoaded: 'idle',
} as userLogin;

const userLoginSlice = createSlice({
    name: 'User Login',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
       builder.addCase(LoginUser.pending, (state) => {
        state.loggedin = {}
        state.isLoaded = 'pending'
       })
       builder.addCase(LoginUser.fulfilled, (state, {payload}:PayloadAction) => {
         state.isLoaded = 'succeeded'
         state.loggedin = payload;
       })
       builder.addCase(LoginUser.rejected, (state, action) => {
          state.loggedin = {}
          state.isLoaded = 'failed'
       })
    }
})

export default userLoginSlice.reducer;