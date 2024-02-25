/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useCallback } from 'react';
import { BooksContext } from './context';
import { fetcher, postBook, putBook, deleteBook as deleteBookAction } from './actions';
import useSWR from 'swr';
import { IBook, IBookSubmit } from './types';

export const BooksProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { data: books, isLoading: loading, mutate } = useSWR('/books', fetcher, {
		revalidateOnFocus: false
	});

	const addBook = useCallback(async (book: IBookSubmit) => {
		try {
			const bookSubmitted = await postBook(book); 
			mutate([...(books || []), bookSubmitted]);
		} catch (e) {
			const error = e as unknown as Error;
			console.error(error.message);
		}
	}, [books]);

	const updateBook = useCallback(async (book: IBook) => {
		try {
			const bookUpdated = await putBook(book); 
			const tempBooks = [...(books as IBook[])];
			const indexUpdated = tempBooks.findIndex(b => b.id === bookUpdated.id);
			if (indexUpdated >= 0) {
				tempBooks.splice(indexUpdated, 1, bookUpdated);
				mutate(tempBooks);
			}
		} catch (e) {
			const error = e as unknown as Error;
			console.error(error.message);
		}
	}, [books]);

	const deleteBook = useCallback(async (bookId: number) => {
		try {
			await deleteBookAction(bookId); 
			const tempBooks = [...(books as IBook[])];
			const indexDeleted = tempBooks.findIndex(b => b.id === bookId);
			if (indexDeleted >= 0) {
				tempBooks.splice(indexDeleted, 1);
				mutate(tempBooks);
			}
		} catch (e) {
			const error = e as unknown as Error;
			console.error(error.message);
		}
	}, [books]);

	return (
		<BooksContext.Provider
			value={{
				books: books,
				loading,
				addBook,
				updateBook,
				deleteBook,
			}}>
			{children}
		</BooksContext.Provider>
	);
};
