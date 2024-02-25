import * as Yup from 'yup';
import { bookGenres } from '../../providers';

export const validationSchema = Yup.object().shape({
	title: Yup.string().min(4, 'Min 4 chars are required').required('Title is required'),
	author: Yup.string().min(4, 'Min 4 chars are required').required('Author is required'),
	genre: Yup.string().oneOf(bookGenres).required('Genre is required'),
	description: Yup.string().max(100, 'Max char allowed are 100')
});
