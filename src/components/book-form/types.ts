import { IBook, IBookSubmit } from '../../providers';

export interface IBookFormProps {
	open: boolean;
	mode: 'edit' | 'add';
	initialValues: IBook | IBookSubmit;
	onSubmit: ((data: IBookFormProps['initialValues']) => void);
}
