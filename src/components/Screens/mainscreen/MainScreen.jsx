import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetch_mainscreen_data} from './store/action'
import {selectMainScreenData} from './store/slice'
function MainScreen() {
    const dispatch = useDispatch();
    const {mainscreendata} = useSelector(selectMainScreenData)
    fetch_mainscreen_data(dispatch)
    console.log(mainscreendata);
    return (
        <div>
            <div>
                <span>BOMB THE CITY</span>
            </div>
            <div>
                <input type="text"  />
                <input type="text"  />
            </div>
            <div>
                <button>Login</button>
            </div>
            
        </div>
    )
}

export default MainScreen
