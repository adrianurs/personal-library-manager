import { FC } from 'react';
import { Masonry } from '@mui/lab';
import { BookCard } from '../book-card';
import { useFiltersContext } from '../../providers';

export const StackView: FC = () => {
	const { filteredData: books } = useFiltersContext();

	return (
		<Masonry columns={{ xs: 1, sm: 3, md: 6 }} spacing={2}>
			{(books || []).map((book) => (
				<BookCard key={book.id.toString()} book={book} />
			))}
		</Masonry>
	);
};
