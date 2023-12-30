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
      'textIn': {
      '0%':{
        transform: 'translateX(-400px)'
      } ,
       '100%':{
        transform: 'translateX(0px)'

       }
      }     ,  
   
      'textIn2': {
      '0%':{
        transform: 'translateX(-400px)'
      } ,
       '100%':{
        transform: 'translateX(0px)'

       }
      }     ,  
   
      'textIn3': {
      '0%':{
        transform: 'translateX(-400px)'
      } ,
       '100%':{
        transform: 'translateX(0px)'

       }
      }     ,  
   
      
      
      

    },
   animation:{
      'hoverlinein':'hoverlinein 500ms forwards',
      'hoverlineout':'hoverlineout 500ms',
      'textIn':  'textIn 1.5s  ',
      'textIn2':  'textIn 3s',
      'textIn3':  'textIn 4.5s',
      

   },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          

        
      },
      colors: {
        myOrange: '#DD5336',
        myBlue: '#1644BB',
        myGrayBlue: '#0F32AE',
        gradientWhite: 'linear-gradient(312deg, #F2F2F2 11.67%, #86A4F0 100%);'
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
