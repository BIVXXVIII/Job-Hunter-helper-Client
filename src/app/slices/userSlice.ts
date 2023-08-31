import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    userName: string;
    userId: string;
    userProperties: [];
};

type UserState = {
    login: boolean;
    activeUser: User | null;
};
const initialState: UserState = {
    login: false,
    activeUser: null,
};

export const userSlice = createSlice({
    name: "user info",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.login = true;
            state.activeUser = action.payload;
        },
        logout: (state) => {
            state.login = false;
            state.activeUser = null;
        },
    },
});

export const {login, logout} = userSlice.actions

export default userSlice.reducer