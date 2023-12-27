"use client";
import {useEffect, useState} from "react"
import { useTheme} from "next-themes";



const ThemeSwitcher= () => {
    const [mounted,setMounted] = useState(false);
   
    const {theme,setTheme}= useTheme()

      useEffect(()=>{
      setMounted(true)

      },[])

      if(!mounted) {

        return null
      }

    return(
       <div class="flex gap-4">
  

       <button onClick={() => setTheme('light')}>Light Mode</button><br/>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>





       </div>



    )
    }
    export default ThemeSwitcher;