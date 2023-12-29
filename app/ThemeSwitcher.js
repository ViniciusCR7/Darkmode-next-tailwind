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
       <div class="flex gap-8">
  

       <button class="hidden dark:block hover:scale-125 hover:transition duration-1000 min-w-7 min-h-7 " onClick={() => setTheme('light')}><img  class="size-7"  src="img/sun_1.svg"/></button>
       <button class="dark:hidden hover:scale-125 hover:transition duration-1000 min-w-7 min-h-7" onClick={() => setTheme('light')}><img  class="size-7"  src="img/sun_2.svg"/></button>
       
      <button class="hidden dark:block hover:scale-125 hover:transition duration-1000 min-w-7 min-h-7" onClick={() => setTheme('dark')}><img   class="size-7" src="img/moon.svg"/></button>
      <button class="dark:hidden hover:scale-125 hover:transition duration-1000 min-w-7 min-h-7" onClick={() => setTheme('dark')}><img   class="size-7" src="img/moon1.svg"/></button>





       </div>



    )
    }
    export default ThemeSwitcher;