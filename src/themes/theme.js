import { createTheme } from '@mui/material'

export const dark = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#a445ed',
		},
		secondary: {
			main: '#f50057',
		},
		text: {
			primary: '#ffffff',
			secondary: '#757575',
		},
		error: {
			main: '#ff5252',
		},
		divider: '#3a3a3a',
		background: {
			default: '#050505',
			paper: '#1F1F1F',
		},
	},
	typography: {
		fontSize: 16,
		htmlFontSize: 16,
		h1: {
			fontSize: '4rem',
		},
		h2: {
			fontSize: '1.5rem',
		},
		h3: {
			fontSize: '1.25rem',
		},
		body1: {
			fontSize: '1.125rem',
		},
		body2: {
			fontSize: '0.875rem',
		},
	},
	spacing: 2,
})

export const light = createTheme({
	mode: 'light',
	palette: {
		primary: {
			main: '#a445ed',
		},
		secondary: {
			main: '#f50057',
		},
		text: {
			primary: '#2d2d2d',
			secondary: '#757575',
		},
		error: {
			main: '#ff5252',
		},
		divider: '#e9e9e9',
		background: {
			default: '#ffffff',
			paper: '#f4f4f4',
		},
	},
	typography: {
		fontFamily: 'Inter',
		fontSize: 16,
		htmlFontSize: 16,
		h1: {
			fontSize: '4rem',
		},
		h2: {
			fontSize: '1.5rem',
		},
		h3: {
			fontSize: '1.25rem',
		},
		body1: {
			fontSize: '1.125rem',
		},
		body2: {
			fontSize: '0.875rem',
		},
	},
	spacing: 2,
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					'&:focus': {
						border: '2px solid #a445ed',
					},
					'&:active': {
						borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
					},
					'&.Mui-focused:after': {
						borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
					},
				},
			},
		},
	},
})
