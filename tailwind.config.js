/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        
     fontFamily: {
     
        poppins: ['Poppins']
     },
     

    keyframes:{
      'hoverlinein': {
      '0%':{
        width: '100%'
      } ,
       '100%':{
        width: '60%'

       }
      }     ,  
   
      
      'hoverlineout': {
      '0%':{
        width: '60%'
      } ,
       '100%':{
        width: '100%'

       }
      }     ,  
   
      
      
      

    },
   animation:{
      'hoverlinein':'hoverlinein 500ms forwards',
      'hoverlineout':'hoverlineout 500ms'
      

   },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        
      },
      colors: {
        myOrange: '#DD5336',
        myBlue: '#1644BB',
        myGrayBlue: '#0F32AE'
      },
      textColor: {
        myOrange: '#DD5336',
        myBlue: '#1644BB',
        myGrayBlue: '#0F32AE'
      },
    },
  },
  plugins: [],
}
