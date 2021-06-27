const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-nesting'),
		require('tailwindcss'),
		cssnano(),
		postcssPresetEnv({
			stage: 1,
			features: {
				'focus-within-pseudo-class': false,
			},
		}),
		require('autoprefixer'),
	]
}