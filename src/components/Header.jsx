/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import NativeSelect from '@mui/material/NativeSelect'
import Switch from '@mui/material/Switch'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import Logo from './Logo'
import MoonIcon from './MoonIcon'

const FONTS = [
	{
		label: 'Sans Serif',
		font: 'Inter',
	},
	{
		label: 'Serif',
		font: 'Lora',
	},
	{
		label: 'Mono',
		font: 'Inconsolata',
	},
]

export default function Header({ themeChanger, darkMode, updateThemeFont }) {
	const [currFont, setCurrFont] = useState(FONTS[0].font)

	const theme = useTheme()
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '1.5rem',
			}}>
			<Box>
				<Logo />
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<NativeSelect
							id='font-select'
							defaultValue={currFont}
							onChange={e => updateThemeFont(e.target.value)}
							sx={{
								fontFamily: theme.typography.fontFamily,
								boxShadow: 'none',
								'.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
							}}>
							{FONTS.map(({ label, font }) => (
								<option key={font} value={font}>
									{label}
								</option>
							))}
						</NativeSelect>
					</FormControl>
				</Box>
				<FormGroup>
					<FormControlLabel
						control={<Switch checked={darkMode} onChange={themeChanger} />}
						label={<MoonIcon />}
					/>
				</FormGroup>
			</Box>
		</Box>
	)
}
