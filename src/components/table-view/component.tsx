import { FC, useMemo } from 'react';
import { ITableColumn, Table } from '../table';
import { UpdateBook } from '../update-book';
import { DeleteBook } from '../delete-book';
import booksTableColumns from './columns.json';
import { useFiltersContext } from '../../providers/filters';

export const TableView: FC = () => {
	const { filteredData: books } = useFiltersContext();

	const memoizedBooks = useMemo(() => (
		books?.map(book => ({
			...book,
			actions: <>
				<UpdateBook book={book} />
				<DeleteBook book={book} />
			</>
		}))
	), [books]);

	return (
		<Table columns={booksTableColumns as ITableColumn[]} rows={memoizedBooks} />
	);
}
