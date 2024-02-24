import { Box, styled } from '@mui/material';

export const Layout = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: theme.palette.background.default,
	width: '100%',
	height: '100%',
	padding: 20
}))
