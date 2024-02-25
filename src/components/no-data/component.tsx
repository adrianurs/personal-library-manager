import { Inbox } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FC, memo } from 'react';

export const NoData: FC = memo(() => {
	return (
		<>
			<Inbox sx={{ fontSize: 100, marginTop: '2%' }} color="primary" />
			<Typography variant="h5" color="primary" textAlign="center">There is no data yet, please try adding a book by clicking the button above!</Typography>
		</>
	);
});
