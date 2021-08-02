import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetch_splashscreen_data} from './store/action'
import {selectSplashScreenData} from './store/slice'
function SplashScreen() {
    // const [data,setData] = useState([])
// const getData =()=>{
// fetch(`Datas/Main.json`, {
//     headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(myJson) {
//     console.log(myJson);
//     setData(myJson);
// })}
// useEffect(() =>{
//     getData();

// },[])
    const dispatch = useDispatch();
    const {splashscreendata} = useSelector(selectSplashScreenData)
    // fetch_splashscreen_data(dispatch)
    // console.log(splashscreendata);
    // console.log('error');
    // console.log(splashscreendata.Status);
    React.useEffect(() => {
        fetch_splashscreen_data(dispatch)
    }, [dispatch])
    
    return (
        <div className="SplashScreen">
            {/* {splashscreendata.map((item )=> {
                return (  <span>{item.name}</span>)
            })} */}
            {splashscreendata.map(item => {
                return(
                    <span>{item.Status}</span>
                )
            })}
        </div>
    )
}

export default SplashScreen