import { FC } from 'react';
import { useBooksContext } from '../../providers';
import { Typography } from '@mui/material';

export const BooksLibrary: FC = () => {
	const { books } = useBooksContext();

	return (
		<>
			{books.map(book => <Typography key={JSON.stringify(book)}>{JSON.stringify(book)}</Typography>)}
		</>
	);
}
