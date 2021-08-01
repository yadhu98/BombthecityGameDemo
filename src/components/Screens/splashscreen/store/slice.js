import {createSlice} from '@reduxjs/toolkit'

export const SplashScreenSlice = createSlice({
    name : 'splashscreen',
    initialState : {
        splashscreendata : []
    },
    reducers : {
        splashscreendata : (state,action)=>{
            const {arr_response} = action.payload;
            state.splashscreendata = arr_response;
        }
    }
})

export const {splashscreendata} = SplashScreenSlice.actions
export const selectSplashScreenData = state => state.splashscreen
export default SplashScreenSlice.reducer