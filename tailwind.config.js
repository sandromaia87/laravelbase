const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    presets: [
        require('./vendor/wireui/wireui/tailwind.config.js')
    ],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './vendor/wireui/wireui/resources/**/*.blade.php',
        './vendor/wireui/wireui/ts/**/*.ts',
        './vendor/wireui/wireui/src/View/**/*.php',
        './app/Http/Livewire/**/*Table.php',
        './vendor/power-components/livewire-powergrid/resources/views/**/*.php',
        './vendor/power-components/livewire-powergrid/src/Themes/Tailwind.php'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
      },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require("@tailwindcss/forms")({
            strategy: 'class',
          }),
    ],
};
