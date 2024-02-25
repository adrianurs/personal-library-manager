import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { FiltersContext } from './context';
import { BookGenre, useBooksContext } from '../books';

export const BOOKS_PER_PAGE = 6;

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { books } = useBooksContext();
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState('');
	const [genreFilters, setGenreFilters] = useState<BookGenre[]>([]);

	const filteredBooks = useMemo(
		() =>
			books?.filter((book) => {
				const searchIsIncluded =
					book.author.toLowerCase().includes(search.toLowerCase()) ||
					book.title.toLowerCase().includes(search.toLowerCase()) ||
					book.description?.toLowerCase().includes(search.toLowerCase());
				if (genreFilters.length) return genreFilters.includes(book.genre as BookGenre) && searchIsIncluded;
				return searchIsIncluded;
			}),
		[books, genreFilters, search]
	);

	const pagedBooks = useMemo(
		() => filteredBooks?.slice(currentPage * BOOKS_PER_PAGE, currentPage * BOOKS_PER_PAGE + BOOKS_PER_PAGE),
		[filteredBooks, currentPage]
	);

	useEffect(() => {
		// Each time that an item is saerch of a genre filter is applied we should move again to the first page
		currentPage !== 0 && setCurrentPage(0);

		// eslint-disable-next-line
	}, [genreFilters.length, search]);

	return (
		<FiltersContext.Provider
			value={{
				filteredData: pagedBooks || [],
				currentPage,
				genreFilters,
				search,
				searchItem: (searched: string) => setSearch(searched),
				onCurrentPageChange: (page: number) => setCurrentPage(page),
				filterGenres: (genres: BookGenre[]) => setGenreFilters(genres),
			}}>
			{children}
		</FiltersContext.Provider>
	);
};
