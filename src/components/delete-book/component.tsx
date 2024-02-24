import { FC, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip, Typography } from '@mui/material';
import { useBooksContext } from '../../providers';
import { Delete } from '@mui/icons-material';
import { IDeleteBookProps } from './types';

export const DeleteBook: FC<IDeleteBookProps> = ({book}) => {
		const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { deleteBook } = useBooksContext();

	const deleteAndClose = async () => {
		await deleteBook(book.id);
		setIsDialogOpen(false);
	};

	return (
		<>
			<Tooltip title='Delete'>
				<IconButton onClick={() => setIsDialogOpen(true)}>
					<Delete color="secondary" />
				</IconButton>
			</Tooltip>
			<Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
				<DialogTitle display='flex' justifyContent='space-between'>
					<Typography variant='h6'>
						Delete {book.title} - {book.author}
					</Typography>
				</DialogTitle>
				<DialogContent>
					<Typography>Are you sure to delete "{book.title}" by "{book.author}" from your library?</Typography>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
					<Button onClick={deleteAndClose}>Delete</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
