import { useTranslations } from 'next-intl'
import { LanguageToggle } from '@/ui/togglelanguage';
import Image from 'next/image';


export default function shope() {
    const t = useTranslations("home")
    return (
      <div class="font-cinzel">
      <div className=" min-h-screen px-20  pt-2 bg-[#DBD6C6] ">
        <div class="grid grid-cols-3 items-center  justify-between ">

        <LanguageToggle />
        
        <div class="flex items-center gap-20">

        <img  class="  size-32 mx-auto " src='/img/Logona.svg'/>
    
        </div>
        <navbar class="pl-40 flex gap-8 text-black font-medium text-lg ">
           <p class="cursor-pointer hover:scale-110 duration-200">{t('ABOUT US')}</p>
           <p class="cursor-pointer hover:scale-110 duration-200">{t('NEWS')}</p>
           <p class="cursor-pointer hover:scale-110 duration-200">{t('CONTACT')}</p>

        </navbar>
        


        </div>
        
        <div class="flex items-center justify-between">

        <div>
          <p class="size-20 text-3xl mb-32 text-[#4C4B68] font-medium">{t('HOW LIFE')}?</p>
        </div>

        <div class="flex flex-col text-[#394366] text-7xl	font-medium ">
        <p class="mb-[-30px] ml-[-120px] self-start z-50">{t('ELEGANT')}</p>
        <img  class="max-w-fit z-0 " src='/img/mainimage.svg'/>
        <p class=" mt-[-50px] mr-[-120px] self-end	z-50">{t('ELEGANT')}</p>


        </div>

        <div>
          <p class="size-20 opacity-0">{t('HOW LIFE')}<span>?</span></p>
        </div>
        </div>

      <div class="mt-32 ">
        <p class="flex justify-center  text-myblueiluminari font-medium text-3xl">{t('TRUST IN')}</p>
      </div>

     <div class="flex justify-center gap-32 mt-18">
       <img src='/img/imgrid1.svg'/>
       <img class="mt-32" src='/img/imgridglass.svg'/>
       <img src='/img/imgglassother.svg'/>

     </div>
   { /*<p class="text-9xl text-myblueiluminari w-8">{t('lighting')}</p> */}
    {/*<p>iluminari</p>*/}
    
    <div class="flex mt-28 justify-around ">

      <p class="w-[570px] text-black font-medium text-xl">
       {t("OUR PREMIUM")}
      </p>

    <button class="text-black  w-40 max-h-12 text-base rounded-sm	border-[1.5px] border-black font-medium hover:bg-myblueiluminari duration-700 hover:text-white">

      {t("Learn More")}
    </button>
    </div>

    <div class="mt-32 flex flex-col text-center gap-16">
      <h1 class=" text-myblueiluminari text-3xl font-medium">{t("what they")}</h1>
      
      <div class="flex flex-col text-myblueiluminari font-medium text-lg ">
       <div class="flex justify-center">

       <p class="text-4xl">"</p>
       <p class="w-9/12">{t("I was")}</p>
       <p class="text-4xl">"</p>
       </div>
     
       <p class="mt-6 text-2xl mb-4">Franz</p>
       <div class="flex gap-2 justify-center">
      <button class="border-2 border-black h-8 w-8">
        <img class="m-auto" src='/img/arrowLeft.svg'/>
      </button>
      <button class="border-2 border-black h-8 w-8">
        <img class="m-auto" src='/img/arrowRight.svg'/>
      </button>

       </div>
      </div>
    </div>
    <img class="mx-auto mt-20 cursor-pointer" src='/img/glassonroof.svg'></img>

     
     <div class="flex text-center text-black my-60 gap-12">
        <div class="w-0.5	bg-black"></div>
      <div class="flex flex-col gap-8 ">
      <p class="text-2xl  font-medium"> {t("Premium quality")} </p>
      <p> {t("Our lighting")} </p>

      </div>
      <div class="w-0.5	bg-black"></div>
      <div  class="flex flex-col gap-8 ">

      <p  class="text-2xl  font-medium"> {t("Unique Design")} </p>
      <p> {t("We take")} </p>
      </div>
      <div class="w-0.5	bg-black"></div>

      <div  class="flex flex-col gap-8 ">

      <p class="text-2xl font-medium"> {t("Energy Efficiency")} </p>
      <p class="w-[420px]"> {t("We prio")}</p>
      </div>

     </div>

     <div class="flex gap-20 ml-20 pb-32">
 
     <div class="flex ">


     <div class=" flex flex-col gap-12"> 
      <div class="flex gap-8  text-[#09091E] font-medium text-5xl">

      <p>{t("Location")}</p>
      <p>1</p>

      </div>
      <div>
        <div class="flex gap-[22.5rem] text-black font-medium ">

        <p class="self-start">01</p>
        <p  class="self-end">01</p>
        </div>
        <img src='/img/locationArizona.svg'/>
        <div class="flex gap-[22.5rem] text-black font-medium ">

        <p>01</p>
        <p>01</p>
        </div>
    
      </div>
     </div>

     <div class="flex flex-col text-black font-medium text-xl  ml-4 gap-8 my-auto">

      <p> bay area</p>
      <p> b45 15 th st,ste 501,san diego,ca 92101</p>
      <p class="underline decoration-black cursor-pointer "> 32.7140929 * N,-117.1525098 *W</p>

     </div>
     </div>
    
 
     <div class="flex ">


     <div class=" flex flex-col gap-12"> 
      <div class="flex gap-8  text-[#09091E] font-medium text-5xl">

      <p>{t("Location")}</p>
      <p>2</p>

      </div>
      <div>
        <div class="flex gap-[21.94rem] text-black font-medium ">

        <p class="self-start">02</p>
        <p  class="self-end">02</p>
        </div>
        <img src='/img/locationCharllote.svg'/>
        <div class="flex gap-[21.94rem] text-black font-medium ">

        <p>02</p>
        <p>02</p>
        </div>
    
      </div>
     </div>

     <div class="flex flex-col text-black font-medium text-xl  ml-4 gap-8 my-auto">

      <p>San Diego</p>
      <p> 4814 washigton blvd,studio 240,st.louis, mo 63074</p>
      <p class="underline decoration-black cursor-pointer "> 34.785500* O,+467.4654098 *N</p>

     </div>
     </div>

     </div>



      </div>

     <footer class="flex bg-[#120C02] w-screen px-32 py-8">
      <div class="flex gap-[680px]">
        

      <div class="flex flex-col gap-8">
    <img class="max-w-fit" src='/img/lufooter.svg'/>
      <p class="text-xl">{t("Stay in")}.</p>
        <div class="flex flex-col gap-3">


      <div class="flex gap-14">
        
      <p class="">{t("Email adress")}</p>
      <img src='/img/ArrowFooter.svg'/>
      
      </div>

      <div class="bg-white h-0.5	w-48"></div>
        </div>
   
      
      </div>
      <div class="flex flex-col gap-10 my-auto ">
      <p class="text-xl">{t("we collo")}<br/> <span class="underline ">{t("lets co")}</span></p>

      <div class="flex gap-8 ">
        <div class="flex flex-col gap-1">
        <p class="mb-2">Social</p>
        <p>Instagram</p>
        <p>twitter</p>
        <p>facebook</p>

        </div>
        <div classs="flex flex-col gap-1">
        <p class="mb-2">{t("Offices")}</p>
        <p>{t("London")}</p>
        <p>leeds</p>

        </div>
      </div>

      </div>

      </div>

  <div></div>
     </footer>
     </div>

    )
  }