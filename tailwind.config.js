/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    fontSize: {
      '8xl':
       ['120px', {
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }],

      '7xl':
       ['72px', {
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }],

      '6xl':
       ['55px', {
        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',
      }],

      '5xl':
       ['48px', {
        lineHeight: '54px',
        letterSpacing: '-1.60000px',
        fontWeight: '500',
      }],
      '4xl':
      ['36px', {
       lineHeight: '44px',
       letterSpacing: '-1.20000px',
       fontWeight: '500',
     }],
     '3xl':
     ['28px', {
      lineHeight: '34px',
      letterSpacing: '-1.00000119209px',
      fontWeight: '500',
    }],
    '2xl':
    ['24px', {
     lineHeight: '30px',
     letterSpacing: '-1px',
     fontWeight: '400',
   }],
   xl:
   ['24px', {
    lineHeight: '54px',
    letterSpacing: '-1px',
    fontWeight: '400',
  }],
  lg:
  ['21px', {
   lineHeight: '30px',
   letterSpacing: '-0.8000000011px',
   fontWeight: '400',
 }],

 base:
 ['17px', {
  lineHeight: '25px',
  letterSpacing: '-0.61px',
  fontWeight: '400',
}],
sm:
['15px', {
 lineHeight: '23px',
 letterSpacing: '-0.6000000011px',
 fontWeight: '400',
}],

caption1:
['20px', {
 lineHeight: '24px',
 letterSpacing: '-0.6000000011px',
 fontWeight: '400',
}],
caption2:
['18px', {
 lineHeight: '20px',
 letterSpacing: '-0.3000000011px',
 fontWeight: '400',
}],
caption3:
['16px', {
 lineHeight: '18px',
 letterSpacing: '-0.6000000011px',
 fontWeight: '400',
}],
caption4:
['13px', {
 lineHeight: '15px',
 letterSpacing: '-0.2000000011px',
 fontWeight: '400',
}],
    },
    borderRadius:{
      DEFAULT:"10px",
      full:"9999px",
    },


    extend: {
      colors:{
        white:"#ffffff",
        primary:{
          200:"#efeffc",
          300:"#cfd0f6",
          400:"9d2333",
          500:"#5F62E2",
          DEFAULT:"#f00020",
          600:"#5658CB",
          700:"#7f81e8",
  
        },
        
        primaryred:{
          200:"#efeffc",
          300:"#cfd0f6",
          400:"#7f81e8",
          DEFAULT:"#5F62E2",
          600:"#5658CB",
  
        },

        secondary:{
          200:"#eaf8f4",
          300:"#bfe9de",
          400:"#56c4a7",
          DEFAULT:"#2AB691",
          600:"#26a482",
  
        },
        gray:{
          300:"#fafafa",
          400:"#f2f2f2",
          500:"#e5e5e5",
          600:"#b2b2b2",
          700:"#808080",
          800:"#333333",
          DEFAULT:"#1D1D1D"
        },
        alert:{
          danger:"#FF4E4E",
          success:"#90DA1",
          warning:"#FEB72F"
        }
      },

    },
  },
  plugins: [],
}

