import API from '../../../../Store/ApiFetch'
import {BASE} from '../../../../Store/Api.js'

import { splashscreendata } from './slice'

export const fetch_splashscreen_data = (dispatch)=>{
    let api_url = BASE
    
    API('get',api_url)
    .then(res=>{
        const {response} = res
        // console.log(response)
        dispatch(splashscreendata({
            arr_response: response
        }))
    })
}
