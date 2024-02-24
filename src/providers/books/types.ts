import { bookGenres } from './genres';

export type BookGenre = typeof bookGenres[number]; 

export interface IBookSubmit {
	author: string;
	title: string;
	genre: BookGenre;
	description?: string;
}

export interface IBook extends IBookSubmit {
	id: number;
}

export interface IBooksContext {
	books: IBook[];
	loading: boolean;
	addBook: (book: IBookSubmit) => Promise<void>;
	updateBook: (book: IBook) => Promise<void>;
	deleteBook: (bookId: number) => Promise<void>;
}
