import { createContext, useContext } from 'react';
import { IBooksContext } from './types';

export const BooksContext = createContext<IBooksContext>({
	books: [],
	loading: false,
	addBook: async () => { },
	updateBook: async () => { },
	deleteBook: async () => { }
});

export function useBooksContext(): IBooksContext {
	return useContext(BooksContext);
} 
