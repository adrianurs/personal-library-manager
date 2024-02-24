import { Box, Typography, styled } from '@mui/material';

export const BookMark = styled(Box)(({ theme }) => ({
	width: 0,
	height: 100,
	position: 'relative',
	boxSizing: 'border-box',
	border: '1px solid #000',
	borderBottom: `20px solid transparent`,
	borderTop: 'none',
	borderLeft: `30px solid ${theme.palette.secondary.light}`,
	borderRight: `30px solid ${theme.palette.secondary.light}`,
	cursor: 'pointer',
	':hover': {
		borderLeft: `30px solid ${theme.palette.secondary.main}`,
		borderRight: `30px solid ${theme.palette.secondary.main}`
	}
}));

export const AddABookTextWrapper = styled(Typography)( {
	position: 'absolute',
	color: '#fff',
	textAlign: 'center',
	left: '50%',
	top: '50%',
  transform: 'translate(-50%, -50%)'
})
