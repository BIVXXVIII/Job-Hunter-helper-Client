import { configureStore } from "@reduxjs/toolkit";
import createStatus from "./slices/createStatusSlice";
import craetionData from "./slices/creationDataSlice";
import userData from "./slices/userSlice";
export const store = configureStore({
    reducer: {
        createStatus,
        craetionData,
        userData,
    },
});

export type RootState = ReturnType<typeof store.getState>;
