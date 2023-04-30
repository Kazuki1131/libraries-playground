/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			backgroundColor: {
				primary: '#1D3461',
				success: '#5AB203',
			},
			textColor: {
				primary: '#ffffff',
				success: '#ffffff',
				transparent: '#111111',
			},
			borderColor: {
				transparent: 'black',
			},
			borderRadius: {
				custom: '12px',
			},
			height: {
				custom: '38px',
			},
			lineHeight: {
				custom: '22px',
			},
		},
	},
	plugins: [],
};
