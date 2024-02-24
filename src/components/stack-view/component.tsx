import { FC } from 'react';
import { useBooksContext } from '../../providers';
import { Masonry } from '@mui/lab';
import { BookCard } from '../book-card';

export const StackView: FC = () => {
	const { books } = useBooksContext();

	return (
		<Masonry columns={{ xs: 1, sm: 3, md: 6 }} spacing={2}>
			{books.map((book) => (
				<BookCard key={book.id.toString()} book={book} />
			))}
		</Masonry>
	);
};
