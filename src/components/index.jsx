import React, { useEffect } from 'react'
import SplashScreen from './Screens/splashscreen/SplashScreen'
function App() {
    const [splashScreen ,setSpashscreen] = React.useState(true)
    useEffect(() =>{
        return(
            setTimeout(()=>setSpashscreen(false),1000000)
        )
    },[splashScreen])
    return (
        <div>
            {splashScreen ? <SplashScreen /> : null} 
        </div>
    )
}

export default App
