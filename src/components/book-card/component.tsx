import { FC } from 'react';
import { IBookCardProps } from './types';
import { Grid, Tooltip, Typography } from '@mui/material';
import { CardWrapper } from './styled';
import { UpdateBook } from '../update-book';
import { DeleteBook } from '../delete-book';

export const BookCard: FC<IBookCardProps> = ({ book }) => {
	return (
		<CardWrapper>
			<Grid container spacing={1}>
				<Grid container item xs={12} gap={1} justifyContent='flex-end'>
					<UpdateBook book={book} />
					<DeleteBook book={book} />
				</Grid>
				<Grid container item xs={12} height={150} justifyContent='center' alignItems='center' flexWrap="wrap" >
					<Typography variant='h5' textAlign="center" sx={{ wordBreak: "break-word" }}>{book.title}</Typography>
				</Grid>
				<Grid container item xs={12} justifyContent='center'>
					<Typography variant='body2'>
						by <strong>{book.author}</strong>
					</Typography>
				</Grid>
				<Grid container item xs={12} justifyContent='center'>
					<Typography variant='body2'>{book.genre}</Typography>
				</Grid>
				<Grid container item xs={12} flexWrap="wrap">
					<Tooltip title={book.description}>
					<Typography variant='caption' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>
						{book.description}
						</Typography>
						</Tooltip>
				</Grid>
			</Grid>
		</CardWrapper>
	);
};
