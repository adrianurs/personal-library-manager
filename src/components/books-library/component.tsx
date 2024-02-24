import { FC, useState } from 'react';
import { TableChart, ViewModule } from '@mui/icons-material';
import { StackView } from '../stack-view';
import { TableView } from '../table-view';
import { Tooltip, ToggleButton, ToggleButtonGroup  } from '@mui/material';
import { LibraryWrapper } from './styled';

const views = {
	stack: StackView,
	table: TableView
}

export const BooksLibrary: FC = () => {
	const [viewSelected, setViewSelected] = useState<'stack' | 'table'>('stack');
	const ViewSelected = views[viewSelected];

	return (<LibraryWrapper>
		<ToggleButtonGroup value={viewSelected} exclusive onChange={(_, newView) => newView && setViewSelected(newView)} sx={{alignSelf: 'flex-end'}}>
			<Tooltip title="Stack view">
			<ToggleButton value="stack">
				<ViewModule/>
				</ToggleButton>
			</Tooltip>
			<Tooltip title="Table view">
			<ToggleButton value="table">
				<TableChart/>
				</ToggleButton>
				</Tooltip>
		</ToggleButtonGroup>
		<ViewSelected/>
	</LibraryWrapper>);
}
