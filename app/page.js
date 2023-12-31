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

<img class="size-10  hover:scale-110   hovertransition duration-500  min-w-10 min-h-10  dark:hidden  " src="img/menu.svg"/>
<img class="size-10  hover:scale-110   hovertransition duration-500  min-w-10 min-h-10  hidden dark:flex" src="img/menuB.svg"/>

  </div>
      <ul class={`flex flex-col lg:flex-row gap-4  items-center   text-xl lg:text-2xl  dark:lg:bg-transparent lg:bg-transparent min-w-32 min-h-36 lg:min-w-0 lg:min-h-0  ${
              menuAberto ? 'flex bg-blue-950 dark:bg-orange-800 rounded-lg ' : 'hidden lg:flex '
            }`}>
            <li class="duration-300 text-white lg:text-black dark:text-white cursor-pointer mt-3 lg:mt-0 group hover:text-blue-500 dark:hover:text-orange-300 dark:hover:lg:text-inherit hover:lg:text-inherit ">about me
            <div class=" hidden lg:flex mx-auto bg-myBlue dark:bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
            <li class="duration-300 text-white lg:text-black dark:text-white cursor-pointer group hover:text-blue-500 dark:hover:text-orange-300 dark:hover:lg:text-inherit hover:lg:text-inherit ">my projects
            <div class="hidden lg:flex mx-auto bg-myBlue dark:bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521]  "></div>
            </li>
            <li class="duration-300 text-white lg:text-black dark:text-white cursor-pointer  group hover:text-blue-500 dark:hover:text-orange-300 dark:hover:lg:text-inherit hover:lg:text-inherit ">Contact
            <div class="hidden lg:flex mx-auto bg-myBlue dark:bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
     </ul>
        </div>
   
        </nav>
      </header>
      
      <main class="grid grid-cols-1  sm:grid-cols-2   pr-0 md:pr-20 lg:pr-20 ">

        <div /* lado esquerdo */ class="flex flex-col gap-14 sm:gap-24">


      <h1 class=" pl-48 sm:pl-20 mt-24 text-8xl font-poppins font-bold animate-textIn  ">
        He<span class="  text-myBlue dark:text-myOrange ">llo</span>
      </h1>
       

       <div class=" bg-[#B1BBD7] dark:bg-[#292D38] w-[20%] h-1/6  min-w-[390px] sm:min-w-72 max-h-10	opacity-90">
       <h2 class="font-poppins font-semibold text-3xl pl-48 sm:pl-20  animate-textIn2">
        I am <span class="text-myGrayBlue dark:text-[#B87A6D]">Vinicius</span>
       </h2>
       </div>
       <div class=" min-w-[390px] sm:min-w-72 min-h-20	 flex flex-col bg-[#B1BBD7] dark:bg-[#292D38] w-[20%] text-myGrayBlue 	dark:text-[#B87A6D] gap-4 font-poppins">
        <h2 class="  pl-48 sm:pl-20 text-xl font-semibold animate-textIn3 ">
        My world
        </h2>
        <p class=" pl-48 sm:pl-20 mb-2 animate-textIn3 ">
        In my world you will find projects from different niches, I hope you like it
        </p>
       </div>
    
        </div> 
        
     <div  /* Lado direito */ class="mt-14 sm:mt-24  mx-auto">
        

    <div class="flex flex-col gap-2 font-poppins items-center mb-4  md:hidden ">
     <h1 class=" font-semibold text-4xl">Checky my</h1>
     
     <a class="  bg-myBlue dark:bg-myOrange text-2xl text-white	rounded-md py-0.5 px-6 cursor-pointer  hover:bg-[#102865] dark:hover:bg-[#892814] font-poppins hover:transition duration-150 ">
      
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
     
     <a class="  bg-myBlue dark:bg-myOrange text-2xl text-white	rounded-md py-0.5 px-6 cursor-pointer  hover:bg-[#102865] dark:hover:bg-[#892814] font-poppins hover:transition duration-150">
      
     Projects
      </a>
 
    </div>
        
   
     </div>
     

        

      </main>
    <div  class='flex gap-5 relative md:fixed md:right-4 my-8 md:my-0 justify-center md:bottom-4  md:flex'>
       
       <img class='hover:scale-125 hover:transition duration-1000 cursor-pointer hidden dark:flex ' src='img/instagram.svg'/>
       <img class=' hover:scale-125 hover:transition duration-1000 cursor-pointer dark:hidden' src='img/instagramB.svg'/>
       <img class='hover:scale-125 hover:transition duration-1000 cursor-pointer hidden dark:flex ' src='img/linkeddin.svg'/>
       <img class=' hover:scale-125 hover:transition duration-1000 cursor-pointer dark:hidden' src='img/linkeddinB.svg'/>
       <img class='hover:scale-125 hover:transition duration-1000 cursor-pointer hidden dark:flex ' src='img/twitter.svg'/>
       <img class=' hover:scale-125 hover:transition duration-1000 cursor-pointer dark:hidden' src='img/twitterB.svg'/>
       
    </div>
 
    </div>
  )
}
