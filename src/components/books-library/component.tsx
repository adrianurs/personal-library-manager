import { FC, useState } from 'react';
import { StackView } from '../stack-view';
import { TableView } from '../table-view';
import { Grid, Pagination } from '@mui/material';
import { LibraryWrapper } from './styled';
import { ViewSelection } from './view-selection';
import { BOOKS_PER_PAGE, useFiltersContext } from '../../providers';
import { Filters } from './filters';

const views = {
	stack: StackView,
	table: TableView,
};

export const BooksLibrary: FC = () => {
	const [viewSelected, setViewSelected] = useState<'stack' | 'table'>('stack');
	const { filteredData, currentPage, onCurrentPageChange } = useFiltersContext();
	const ViewSelected = views[viewSelected];

	return (
		<LibraryWrapper>
			<Grid container spacing={2}>
				<Filters />
				<Grid container item xs={4} sm={2} justifyContent={{ xs: 'center', sm: 'flex-end' }}>
					<ViewSelection view={viewSelected} setView={setViewSelected} />
				</Grid>
			</Grid>
			<ViewSelected />
			<Pagination
				count={Math.floor((filteredData?.length || 0) / BOOKS_PER_PAGE) + 1}
				page={currentPage + 1}
				onChange={(_, p) => onCurrentPageChange(p - 1)}
			/>
		</LibraryWrapper>
	);
};
