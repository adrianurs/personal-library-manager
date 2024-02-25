import { BookGenre, IBook } from '../books';

export interface IFiltersContext {
	filteredData: IBook[];
	pagedData: IBook[];
	currentPage: number;
	genreFilters: BookGenre[];
	search: string;
	onCurrentPageChange: (page: number) => void;
	searchItem: (search: string) => void;
	filterGenres: (genres: BookGenre[]) => void;
}
