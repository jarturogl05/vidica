/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primaryLight: '#042246',
      primaryDark: '#093768',
      primary: '#072146',
      white: '#FFFFFF',
      secondary: '#CA016C',
      transparent: 'transparent'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      title: '36px',
      label: '16px',
      textInput: '18px     '
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
   themes: [
     {
       mytheme: {
         primaryLight: '#042246',
         primaryDark: '#093768',
         primary: '#072146',
         white: '#FFFFFF',
         secondary: '#CA016C',
         'secondary-content': '#f4cce24d',
         transparent: 'transparent',
         base: 'white',
       }
     }
   ]
  },
}