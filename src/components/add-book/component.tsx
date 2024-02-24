import { FC, useState } from 'react';
import { IBook, useBooksContext } from '../../providers';
import { BookForm } from '../book-form';
import { AddABookTextWrapper, BookMark } from './styled';
import { Divider } from '@mui/material';

const formInitialValues = {
	author: '', title: '', genre: '' as IBook['genre'], description: ''
} as IBook;

export const AddBook: FC = () => {
	const { addBook } = useBooksContext();
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<>
			<BookForm mode="add" open={isFormOpen} initialValues={formInitialValues} onSubmit={addBook} />
			<Divider orientation='horizontal' sx={{width: '100%', marginTop: 2}} />
			<BookMark onClick={() => setIsFormOpen(prev => !prev)}>
				<AddABookTextWrapper>{isFormOpen ? 'Close' : 'Add a book'}</AddABookTextWrapper>
			</BookMark>
		</>
	);
}
