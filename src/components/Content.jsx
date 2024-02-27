import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { fetchWordData } from '../api/apiService'
import PlayIcon from './PlayIcon'
import SearchIcon from './SearchIcon'

export default function Content() {
	const [searchWord, setSearchWord] = useState('keyboard')
	const [data, setData] = useState(null)

	const handleChange = e => {
		setSearchWord(e.target.value)
	}

	const handleSubmit = async () => {
		const result = await fetchWordData(searchWord)
		setData(result[0])
	}

	const theme = useTheme()

	theme.typography.h1 = {
		'@media (min-width:600px)': {
			fontSize: '4rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '2rem',
		},
	}

	theme.typography.h2 = {
		'@media (min-width:600px)': {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '1.125rem',
		},
	}

	theme.typography.body1 = {
		'@media (min-width:600px)': {
			fontSize: '1.125rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '1rem',
		},
	}
	return (
		<Grid
			container
			spacing={2}
			sx={{
				marginTop: '24px',
				marginLeft: '0px',
				padding: 0,
				fontFamily: theme.typography.fontFamily,
			}}>
			<Grid item xs={12} sx={{ padding: '0px' }}>
				<FormControl sx={{ width: '100%' }}>
					<InputBase
						sx={{
							flex: 1,
							backgroundColor: theme.palette.background.paper,
							borderRadius: '1rem',
							padding: '0.875rem 1.5rem',
							fontFamily: theme.typography.fontFamily,
						}}
						placeholder='Search...'
						endAdornment={
							<InputAdornment position='end'>
								<IconButton type='button' onClick={handleSubmit}>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						}
						inputProps={{ 'aria-label': 'search words' }}
						value={searchWord}
						onChange={handleChange}
					/>
				</FormControl>
			</Grid>
			<Grid item xs={12} sx={{ marginTop: '24px' }}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Box>
						<Typography
							variant='h1'
							fontSize={theme.typography.h1.fontSize}
							fontFamily={theme.typography.fontFamily}
							fontWeight={'bold'}>
							{data?.word}
						</Typography>
						<Typography
							variant='h2'
							fontFamily={theme.typography.fontFamily}
							sx={{ color: '#a445ed', fontWeight: 'bold' }}>
							{data?.phonetic}
						</Typography>
					</Box>
					<PlayIcon />
				</Box>
			</Grid>
			{data?.meanings?.map((value, index) => (
				<Grid item xs={12} key={index} sx={{ margin: '18px 0px 18px 0px' }}>
					<Box>
						<Typography
							variant='body1'
							fontFamily={theme.typography.fontFamily}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontStyle: 'italic',
								fontWeight: 'bold',
								'&::after': {
									content: '""',
									flex: 1,
									height: '1px',
									backgroundColor: theme.palette.divider,
									marginLeft: '.5rem',
								},
							}}>
							{value.partOfSpeech}
						</Typography>
						<Typography
							variant='body1'
							fontFamily={theme.typography.fontFamily}
							sx={{ color: theme.palette.text.secondary }}>
							Meanings
						</Typography>
						<ul>
							{value.definitions.map((def, index) => (
								<li key={index}>
									<Typography
										variant='body1'
										fontFamily={theme.typography.fontFamily}
										sx={{ color: theme.palette.text.primary, fontWeight: 'normal' }}>
										{def.definition}
									</Typography>
								</li>
							))}
						</ul>
						<Box sx={{ display: 'flex', gap: '10px', alignContent: 'center' }}>
							<Typography
								variant='body1'
								fontFamily={theme.typography.fontFamily}
								sx={{ color: theme.palette.text.secondary }}>
								Synonyms{' '}
							</Typography>
							{value.synonyms.map((syn, index) => (
								<Typography
									key={index}
									variant='body1'
									fontFamily={theme.typography.fontFamily}
									sx={{ color: '#a445ed' }}>
									{syn}
								</Typography>
							))}
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
	)
}
