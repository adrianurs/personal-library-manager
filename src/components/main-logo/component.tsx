import { FC, memo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Logo } from '../../assets';

export const MainLogo: FC = memo(() => {
	return (
		<Grid container maxWidth={500} marginBottom={2}>
			<Grid container item justifyContent="center" xs={12} md={3}>
				<Box
					component='img'
					height={200}
					width={200}
					style={{ objectFit: "contain" }}
					src={Logo}
				/>
			</Grid>
			<Grid container item xs={12} md={9} justifyContent="center" alignItems="center">
				<Typography textAlign="center" variant="h2">The library</Typography>
			</Grid>
		</Grid>
	);
});
