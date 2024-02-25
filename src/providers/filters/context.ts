import { createContext, useContext } from 'react';
import { IFiltersContext } from './types';

export const FiltersContext = createContext<IFiltersContext>({
	filteredData: [],
	currentPage: 1,
	genreFilters: [],
	search: '',
	filterGenres: () => { },
	onCurrentPageChange: () => {},
	searchItem: () => { }
});

export function useFiltersContext() {
	return useContext(FiltersContext);
}
