import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"

const ThemeSwitcer = () =>{
   const {theme ,setTheme} = useContext(ThemeContext)
    return (
        <>
        <button onClick={()=>setTheme(theme === 'light' ? 'dark' :'light')} >
          {theme === 'light' ? 
        ( <i class="fa-solid fa-sun"></i>) :(<i class="fa-solid fa-moon"></i>)}

        </button>
        
        </>
    )
}