/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '980px',
      xl: '1440px',
    },

    container:{
      center:true,
      padding:"2rem",
    },

    fontFamily:{
      Poppins: ['Poppins, san-serif'],
    },

    extend: {
      colors:{
        VerydarkBlue: 'rgb(22 0 65)',
        darkBlue: 'rgb(73 71 159)',
        blue: 'rgb(98 96 181)',
        lightBlue: 'rgb(210 198 250)',
        veryLightBlue: 'rgb(244 240 252)',

        darkYellow: 'rgb(244 195 80)',
        yellow: 'rgb(248 208 117)',
        iconYellow: 'rgb(251 222 155)',
        lightYellow: 'rgb(254 247 231)',

        fontColor: ' rgb(24 8 58)',

        pink: ' rgb(254 205 211)',

        bg1: 'rgb(239 246 255)',
        bg2: 'rgb(244 240 252)',
        bg3: 'rgb(254 243 218)',

      },
    },
  },
  plugins: [],
}

