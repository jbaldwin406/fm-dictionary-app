import { ThemeProvider, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { useMemo, useState } from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import { dark, light } from './themes/theme'

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [darkMode, setDarkMode] = useState(prefersDarkMode)
	const [currFont, setCurrFont] = useState('Inter')

	const getAppTheme = (bool, font) => {
		if (bool) {
			dark.typography.fontFamily = font
			console.log(dark)
			return dark
		} else {
			light.typography.fontFamily = font
			return light
		}
	}

	const theme = useMemo(() => getAppTheme(darkMode, currFont), [darkMode, currFont])

	const updateThemeFont = update => {
		console.log(update)
		setCurrFont(update)
	}

	const toggleDarkMode = e => {
		if (e.target.checked === null) {
			setDarkMode(prefersDarkMode)
		} else {
			setDarkMode(e.target.checked)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<Box sx={{ padding: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
					<Header
						themeChanger={toggleDarkMode}
						darkMode={darkMode}
						updateThemeFont={updateThemeFont}
					/>
					<Content />
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default App
