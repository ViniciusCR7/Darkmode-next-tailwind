"use client";
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher'
import { useState } from 'react';



export default function Home() {

 const [menuAberto,setmenuAberto] = useState(false);

 const toggleMenu = () => {

      
      setmenuAberto(!menuAberto)

 }





  return (
    <div class=" pt-4 ">
      <header class="px-20">
      
        <nav  class={`flex  justify-between ${
              menuAberto ? 'items-start' : 'items-center'
            }`}> 

        <ThemeSwitcher/>

        <div class="flex flex-col lg:flex-row  items-end	">


        <div class="flex items-center lg:hidden cursor-pointer" onClick={toggleMenu}>

<img class="size-10  hover:scale-110   hovertransition duration-500  dark:hidden  " src="img/menu.svg"/>
<img class="size-10  hover:scale-110   hovertransition duration-500  hidden dark:flex" src="img/menuB.svg"/>

  </div>
      <ul class={`flex flex-col lg:flex-row gap-4 text-2xl  dark:lg:bg-transparent ${
              menuAberto ? 'flex bg-blue-950 rounded-md' : 'hidden lg:flex'
            }`}>
            <li class="duration-300 cursor-pointer group">about me
            <div class=" hidden lg:flex mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
            <li class="duration-300 cursor-pointer group ">my projects
            <div class="hidden lg:flex mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521]  "></div>
            </li>
            <li class="duration-300 cursor-pointer  group">Contact
            <div class="hidden lg:flex mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
     </ul>
        </div>
   
        </nav>
      </header>
      
      <main class="grid grid-cols-1  sm:grid-cols-2  pr-20 ">

        <div /* lado esquerdo */ class="flex flex-col gap-24">


      <h1 class=" pl-20 mt-24 text-8xl font-poppins font-bold">
        He<span class="dark:text-myOrange">llo</span>
      </h1>
       

       <div class="bg-[#292D38] w-[20%] h-1/6 min-w-72 max-h-10		">
       <h2 class="font-poppins font-semibold text-3xl pl-20">
        I am <span class="dark:text-[#B87A6D]">Vinicius</span>
       </h2>
       </div>
       <div class=" min-w-72 min-h-20	 flex flex-col bg-[#292D38] w-[20%]	dark:text-[#B87A6D] gap-4 font-poppins">
        <h2 class="pl-20 text-xl font-semibold">
        My world
        </h2>
        <p class="pl-20 mb-2">
        In my world you will find projects from different niches, I hope you like it
        </p>
       </div>
        </div> 
     <div  /* Lado direito */ class="mt-24  mx-auto">
        

    <div class="flex flex-col gap-2 font-poppins items-center mb-4  md:hidden ">
     <h1 class=" font-semibold text-4xl">Checky my</h1>
     
     <a class="bg-myOrange	rounded-md py-0.5 px-6 cursor-pointer lg:cursor-default  hover:bg-[#892814] font-poppins ">
      
     Projects
      </a>

    </div>

       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <img class="min-w-20 lg:min-w-44 max-w-full cursor-pointer lg:opacity-60 hover:opacity-100 hover:scale-110 hovertransition duration-500 hover:z-20  " src='/img/feirinha.svg'  />
        <img class="min-w-20 lg:min-w-44 max-w-full cursor-pointer z-10	lg:opacity-60 hover:opacity-100 hover:scale-110 hovertransition duration-500 " src='/img/iluminari.svg'  />
        <img class="min-w-20 lg:min-w-44 max-w-full cursor-pointer lg:opacity-60 hover:opacity-100 hover:scale-110 hovertransition duration-500 hover:z-20" src='/img/petsave.svg'  height={433.23}/>
        
        </div>
   
        <div class=" flex flex-col gap-2 font-poppins items-center mb-4 mt-6 hidden md:flex">
     <h1 class=" font-semibold text-5xl">Checky my</h1>
     
     <a class="bg-myOrange text-2xl	rounded-md py-0.5 px-6 cursor-pointer hover:bg-[#892814] font-poppins hover:transition duration-150">
      
     Projects
      </a>
 
    </div>
        
   
     </div>
      



      </main>
    <div>


       
    </div>
    </div>
  )
}
