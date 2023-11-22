module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary':'#111',
				'primary-600':'#646363',
				'primary-300':'#414141',
				'secondary':'#78D98F', //green
				'secondary-700':'#0F581F', //green темнозеленый в тексте STEP_section_bg, shadow v tarif
				'secondary-500':'#ADFDBE', 
				'secondary-600':'#3DDFC8',
				'secondary-400':'#C8EFD0', //green STEP_section_bg
				'secondary-250':'#CBFBD5', //green btn
				'secondary-300':'#DBE6E4', //green track
				'accent1':'#FD4142',//red
				'accent2':'#6DE6F9',//blue
				'accent4-600':'#A2A8AE', //grey
				'accent4-500':'#9FA7B4',
				'accent4':' #EFF4F7',
				'gray-e5': '#E5E7EB',
				'gray-f6': '#F6F6F6'
			},
			fontFamily:{
				'ubantu':'Ubantu'
			},
			fontSize:{
				'2xl': ['1.5rem', {
					lineHeight: '1.25',
				}],
				'3xl': ['1.875rem', {
					lineHeight: '1.25',
				}],
				'4xl': ['2.25rem', {
					lineHeight: '1.25'
				}],
				'5xl':['3rem', {
					lineHeight:'1.25'
				}],
				'6xl':['3.75rem', {
					lineHeight:'1.25'
				}],
				'3.5xl':['32px',{
					lineHeight:'1.25'
				}]
			},
			boxShadow:{
				'primary-light':'0px 4px 4px',
				'primary-big':'0px 10px 25px 5px'
			},
			maxWidth:{
				'500':'500px'
			},
			width:{
				'5.5':'22px'
			},
			height:{
				'5.5':'22px'
			},
			inset:{
				'9999':'9999px'
			},
			screens: {
				'xxs': '480px',
				'xs': '768px',
				'sm': '992px',
				'md': '1240px',
				'xl':'1240px',
				'2xl': '1240px'
			}
		},
	},
	plugins: [],
};
