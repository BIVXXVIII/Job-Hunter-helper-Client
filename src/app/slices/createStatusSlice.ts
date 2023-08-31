import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CreateStatusState = {
    currentStep: number;
    complete: boolean; //не знаю поки нащо цей прапор //
    finalStep: number;
    allowNextStep: boolean;
};

const initialState: CreateStatusState = {
    currentStep: 0,
    complete: false,
    finalStep: 4,
    allowNextStep: false,
};

export const pointSlice = createSlice({
    name: "Create status",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1;
        },
        prevStep: (state) => {
            if (state.currentStep === 0) return;
            state.currentStep -= 1;
        },
        resetSteps: (state) => {
            state.currentStep = 0;
            state.complete = true;
            state.allowNextStep = false;
        },
        changeAllowStep: (state, action: PayloadAction<boolean>) => {
            state.allowNextStep = action.payload;
        },
    },
});

export const { nextStep, prevStep, resetSteps, changeAllowStep } =
    pointSlice.actions;

export default pointSlice.reducer;
