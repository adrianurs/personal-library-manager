import { FC, useId } from 'react';
import { ITableProps } from './types';
import { Table as MuiTable, TableHead, TableRow, TableCell, capitalize, TableBody } from '@mui/material';
import { TableWrapper } from './styled';

export const Table: FC<ITableProps> = ({ columns, rows }) => {
	const tableId = useId();
	return (
			<TableWrapper>
				<MuiTable>
					<TableHead>
						<TableRow>
							{columns.map((col, i) => (
								<TableCell
									key={`table-header-item-${col.key}-${i}-${tableId}`}
									align={col.align || 'center'}>
									{capitalize(col.label)}
								</TableCell>
							))}
						</TableRow>
				</TableHead>
				<TableBody>
					{rows?.map((row, i) => (
							<TableRow key={`table-body-row-${i}-${tableId}`}>
								{columns.map((col, j) => (
									<TableCell key={`table-body-col-${i}-${j}-${tableId}`} align={col.align || 'center'}>
											{row[col.key as keyof typeof row]}
										</TableCell>
									))}
							</TableRow>
						))}
				</TableBody>
				</MuiTable>
			</TableWrapper>
	);
};
