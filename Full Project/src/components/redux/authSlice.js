import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isAuthenticated: false,
    userEmail: '',
    token: '',
    role: ''
}

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication(state, action){
            state.isAuthenticated=action.payload
        },
        setUserEmail(state,action){
            state.userEmail=action.payload
        },
        setToken(state, action){
            state.token=action.payload
        },
        setRole(state, action) {
            state.role = action.payload
        }

    }
})

export const {setAuthentication, setUserEmail, setToken, setRole}=authSlice.actions;
export default authSlice.reducer;