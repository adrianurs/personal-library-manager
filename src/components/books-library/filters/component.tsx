import { FC } from 'react';
import { Grid, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { BookGenre, bookGenres, useFiltersContext } from '../../../providers';

export const Filters: FC = () => {
	const { search, searchItem, genreFilters, filterGenres } = useFiltersContext();

	const handleChangeGenres = (e: SelectChangeEvent<unknown>) => {
		const values = e.target.value as string[];
		if (!genreFilters.length && values.includes('All'))
			filterGenres(values.filter((value) => value !== 'All') as BookGenre[]);
		else if (values.includes('All')) filterGenres([]);
		else filterGenres(values as BookGenre[]);
	};

	return (
		<>
			<Grid container item xs={12} sm={6}>
				<TextField
					label='Search by title, author or description'
					value={search}
					onChange={(e) => searchItem(e.target.value)}
					fullWidth
				/>
			</Grid>
			<Grid container item xs={8} sm={4}>
				<TextField
					// InputLabelProps - inputProps added to avoid mui issue for incorrect use of label for
					InputLabelProps={{ htmlFor: 'genre-input' }}
					inputProps={{ id: 'genre-input' }}
					label='Genres'
					fullWidth
					select
					SelectProps={{
						multiple: true,
						value: genreFilters.length ? genreFilters : ['All'],
						onChange: handleChangeGenres,
					}}>
					{['All'].concat(...bookGenres).map((genre) => (
						<MenuItem key={`select-item-book-genre-${genre}`} value={genre}>
							{genre}
						</MenuItem>
					))}
				</TextField>
			</Grid>
		</>
	);
};
