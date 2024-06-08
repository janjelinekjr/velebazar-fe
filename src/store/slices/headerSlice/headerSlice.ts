import {createSlice} from "@reduxjs/toolkit";

export type HeaderSliceState = {
    appName: string
}

const initState: HeaderSliceState = {
    appName: ''
}

const headerSlice = createSlice({
    name: 'header',
    initialState: initState,
    reducers: {
        'setHeaderAppName': (state, action) => {
            state.appName = action.payload
        }
    }
})

export default headerSlice.reducer

export const {setHeaderAppName} = headerSlice.actions