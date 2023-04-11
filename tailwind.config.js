const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        default: '#999999',
        light: '#F5F6F0',
        dark: '#130303',
        accent: '373883',
        primary: '#6230A3',
        secondary: '#FEC200',
        info: '#2A2B5C',
        success: '#538969',
        warning: '#D07831',
        danger: '#F44336',
      },
      textColor: {
        accent: '373883',
        primary: '#6230A3',
        secondary: '#FEC200',
        default: '#999999',
        light: '#F5F6F0',
        dark: '#130303',
      },
      borderColor: {
        accent: '373883',
        primary: '#6230A3',
        secondary: '#FEC200',
        default: '#999999',
        light: '#F5F6F0',
        dark: '#130303',
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
