import {createSlice} from '@reduxjs/toolkit'

export const MainScreenSlice = createSlice({
    name : 'mainscreen',
    initialState : {
        mainscreendata : []
    },
    reducers : {
        splashscreendata : (state,action)=>{
            const {arr_response} = action.payload;
            state.mainscreendata = arr_response;
        }
    }
})

export const {splashscreendata} = MainScreenSlice.actions
export const selectMainScreenData = state => state.splashscreen
export default MainScreenSlice.reducer