import API from '../../../../Store/ApiFetch'
import {AUTH} from '../../../../Store/Api.js'

import { splashscreendata } from './slice'

export const fetch_mainscreen_data = (dispatch)=>{
    let api_url = `${AUTH}splashscreen`
    
    API('get',api_url)
    .then(res=>{
        // const {response} = res
        console.log(res)
        dispatch(splashscreendata({
            arr_response: res
        }))
    })
}
