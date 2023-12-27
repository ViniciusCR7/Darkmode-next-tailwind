import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher'



export default function Home() {
  return (
    <div class=" pt-4 ">
      <header class="px-20">

        <nav  class="flex  justify-between "> 

        <ThemeSwitcher/>
      <ul class="flex gap-4 text-2xl   ">
            <li class="duration-300 cursor-pointer group">about me
            <div class=" mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
            <li class="duration-300 cursor-pointer group ">my projects
            <div class="mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521]  "></div>
            </li>
            <li class="duration-300 cursor-pointer  group">Contact
            <div class="mx-auto bg-myOrange w-100% h-px  animate-hoverlineout group-hover:animate-hoverlinein hover:bg-[#fa4521] "></div>
            </li>
     </ul>
        </nav>
      </header>
      
      <main class="grid grid-cols-1  sm:grid-cols-2  pr-0 md:pr-20 lg:pr-32">

        <div /* lado esquerdo */ class="flex flex-col gap-24">


      <h1 class=" pl-20 mt-24 text-8xl font-poppins font-bold">
        He<span class="dark:text-myOrange">llo</span>
      </h1>
       

       <div class="bg-[#292D38] w-[20%] h-1/6 min-w-72 max-h-10		">
       <h2 class="font-poppins font-semibold text-3xl pl-20">
        I am <span class="dark:text-[#B87A6D]">vinicius</span>
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
        

    <div class="flex flex-col gap-2 font-poppins items-center mb-4">
     <h1 class=" font-semibold text-4xl">Checky my</h1>
     
     <a class="bg-myOrange	rounded-md py-0.5 px-6 cursor-pointer hover:bg-[#892814] font-poppins ">
      
     Projects
      </a>

    </div>

       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <img class="min-w-20 lg:min-w-44 max-w-full" src='/img/feirinha.svg'  />
        <img class="min-w-20 lg:min-w-44 max-w-full z-10	" src='/img/iluminari.svg'  />
        <img class="min-w-20 lg:min-w-44 max-w-full" src='/img/petsave.svg'  height={433.23}/>
        
        </div>
   

        
   
     </div>
      



      </main>

    </div>
  )
}
