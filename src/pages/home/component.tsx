import { FC } from 'react';
import { AddBook, BooksLibrary, MainLogo } from '../../components';

export const Home: FC = () => {
	return (
		<>
			<MainLogo />
			<AddBook />
			<BooksLibrary/>
		</>
	);
} 
