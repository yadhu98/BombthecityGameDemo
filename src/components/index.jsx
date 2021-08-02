import React, { useEffect } from 'react'
import MainScreen from './Screens/mainscreen/MainScreen'
import SplashScreen from './Screens/splashscreen/SplashScreen'
function App() {
    const [splashScreen ,setSpashscreen] = React.useState(true)
    useEffect(() =>{
        return(
            setTimeout(()=>setSpashscreen(false),5000)
        )
    },[splashScreen])
    return (
        <div>
            {splashScreen ? <SplashScreen /> : <MainScreen/>} 
        </div>
    )
}

export default App
