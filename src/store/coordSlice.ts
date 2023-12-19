import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface coordinatesState {
    lat: number;
    lon:number;
}

const initialState:coordinatesState = {
    lat: 56.02,
    lon: 92.92
}

export const coordSlice = createSlice({
    name: "coordinates",
    initialState,
    reducers: {
        changeCoordinates: (state, action:PayloadAction<coordinatesState>) =>{
            state.lat = action.payload.lat
            state.lon = action.payload.lon
        }
    },

})

export default coordSlice.reducer

export const {changeCoordinates} = coordSlice.actions