// import React from 'react'
// import *  as apidata from './Api'
// function ApiFetch() {
//     const [data,setData] = React.useState([])
//     export 
//     const getData =()=>{
//         fetch(``, {
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         })
//         .then(function(response) {a
//             return response.json();
//         })
//         .then(function(myJson) {
//             console.log(myJson);
//             setData(myJson);
//         })}
//     React.useEffect(() =>{
//         getData();
//     },[])
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default ApiFetch


import axios from "axios"


 const Request =(type,url)=>{
    console.log('====================================');
    console.log(url);
    console.log('====================================');
    const success_validation =(res)=>{
        
        let response = {
            response: res.data|| null
        }
        return response;
    }

    switch(type){
        case 'get' : 
                    return(
                        axios.get(url)
                        .then(response=>{
                            return success_validation(response)
                            
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    )
        default :
                        return (
                            console.log('none')
                        )
    }
}
export  default Request