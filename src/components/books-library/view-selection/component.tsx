import { FC, memo } from 'react';
import { IViewSelectionProps } from './types';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { TableChart, ViewModule } from '@mui/icons-material';

export const ViewSelection: FC<IViewSelectionProps> = memo(({ view, setView }) => {
	return (
		<ToggleButtonGroup
			value={view}
			exclusive
			onChange={(_, newView) => newView && setView(newView)}
			sx={{ justifySelf: 'flex-end' }}>
			<Tooltip title='Stack view'>
				<ToggleButton value='stack'>
					<ViewModule />
				</ToggleButton>
			</Tooltip>
			<Tooltip title='Table view'>
				<ToggleButton value='table'>
					<TableChart />
				</ToggleButton>
			</Tooltip>
		</ToggleButtonGroup>
	);
});
