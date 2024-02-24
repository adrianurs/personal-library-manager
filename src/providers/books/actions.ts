import { request } from '../../config';
import { IBook, IBookSubmit } from './types';

export async function fetcher(path: string): Promise<IBook[]> {
	const response = await request.get(path);
	return response.data;
}

export async function postBook(book: IBookSubmit): Promise<IBook> {
	try {
		const response = await request.post('/books', book);
		return response.data;
	} catch (e) {
		if (e instanceof Error)
			throw new Error(e.message);
		throw new Error('Failed to publish book!');
	}
}

export async function putBook(book: IBook): Promise<IBook> {
	try {
		const response = await request.put(`/books/${book.id}`, book);
		return response.data;
	} catch (e) {
		if (e instanceof Error)
			throw new Error(e.message);
		throw new Error('Failed to update book!');
	}
}

export async function deleteBook(bookId: number): Promise<void> {
	try {
		return await request.delete(`/books/${bookId}`);
	} catch (e) {
		if (e instanceof Error)
			throw new Error(e.message);
		throw new Error('Failed to delete book!');
	}
}
