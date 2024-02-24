import { FC, useState } from 'react';
import { IUpdateBookProps } from './types';
import { Dialog, DialogContent, DialogTitle, IconButton, Tooltip, Typography } from '@mui/material';
import { Close, Edit } from '@mui/icons-material';
import { BookForm } from '../book-form';
import { IBook, useBooksContext } from '../../providers';

export const UpdateBook: FC<IUpdateBookProps> = ({ book }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { updateBook } = useBooksContext();

	const updateAndClose = async (book: IBook) => {
		await updateBook(book);
		setIsDialogOpen(false);
	};

	return (
		<>
			<Tooltip title='Update'>
				<IconButton onClick={() => setIsDialogOpen(true)}>
					<Edit />
				</IconButton>
			</Tooltip>
			<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
				<DialogTitle component="div" display='flex' justifyContent='space-between' alignItems="center">
					<Typography variant='h6'>
						Update {book.title} - {book.author}
					</Typography>
					<Tooltip title='close'>
						<IconButton onClick={() => setIsDialogOpen(false)}>
							<Close />
						</IconButton>
					</Tooltip>
				</DialogTitle>
				<DialogContent>
					<BookForm
						open
						mode='edit'
						initialValues={book}
						onSubmit={(book) => updateAndClose(book as IBook)}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
};
