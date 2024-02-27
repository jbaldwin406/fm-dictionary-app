/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeCtxt = createContext()

export function ThemeCtxtProvider({ children }) {
	const userPreference = useMediaQuery('(prefers-color-scheme: dark)')
	console.log(userPreference)

	const [darkMode, setDarkMode] = useState()

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setDarkMode(true)
		} else if (localStorage.getItem('theme') === 'light') {
			setDarkMode(false)
		} else {
			setDarkMode(userPreference)
		}
	}, [userPreference])

	const handleModeChange = () => {
		if (darkMode) {
			localStorage.setItem('theme', 'light')
			setDarkMode(false)
		} else {
			localStorage.setItem('theme', 'dark')
			setDarkMode(true)
		}
	}

	return <ThemeCtxt.Provider value={{ darkMode, handleModeChange }}>{children}</ThemeCtxt.Provider>
}

export function useThemeMode(props) {
	return useContext(ThemeCtxt)
}
