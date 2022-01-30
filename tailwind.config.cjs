const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
    extend: {
			colors: {
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				emerald: colors.emerald,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				rose: colors.rose,
				kabdi: {
					secondary: '#670c2a',
					primary: '#91113b',
					light: '#a61344',
					lightest: '#ce1753'
				}
			},
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography')
	]
};
