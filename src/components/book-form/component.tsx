import { FC } from 'react';
import { Button, Grid, MenuItem, TextField, Collapse } from '@mui/material';
import { useFormik } from 'formik';
import { bookGenres } from '../../providers';
import { IBookFormProps } from './types';
import { validationSchema } from './validationSchema';

export const BookForm: FC<IBookFormProps> = ({ open, mode, initialValues, onSubmit }) => {
	const { values, handleChange, resetForm, handleSubmit, errors, isValid, dirty } = useFormik({
		initialValues: initialValues,
		onSubmit: (data) => { 
			onSubmit(data);
			mode === 'add' && resetForm();
		},
		validationSchema
	});

	return (
		<Collapse in={open}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={1} paddingTop={1}>
					<Grid item xs={12} md={6}>
						<TextField
							label='Title'
							name='title'
							fullWidth
							value={values?.title}
							onChange={handleChange}
							error={!!errors.title}
							helperText={errors.title}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label='Author'
							name='author'
							fullWidth
							value={values?.author}
							onChange={handleChange}
							error={!!errors.author}
							helperText={errors.author}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							// InputLabelProps - inputProps added to avoid mui issue for incorrect use of label for  
							InputLabelProps={{ htmlFor: 'genre-input' }}
							inputProps={{ id: 'genre-input' }}
							label='Genre'
							name='genre'
							fullWidth
							select
							value={values?.genre}
							onChange={handleChange}
							error={!!errors.genre}
							helperText={errors.genre}>
							{bookGenres.map((genre) => (
								<MenuItem key={`select-item-book-genre-${genre}`} value={genre}>
									{genre}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label='Description'
							name='description'
							fullWidth
							value={values?.description}
							onChange={handleChange}
						/>
					</Grid>
					<Grid container item xs={12} justifyContent='flex-end'>
						<Button color="secondary" onClick={() => resetForm()}>Reset</Button>
						<Button disabled={!isValid || !dirty} type='submit'>{mode === 'add' ? 'Add book' : 'Update book'}</Button>
					</Grid>
				</Grid>
			</form>
		</Collapse>
	);
};
