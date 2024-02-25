export interface ITableColumn {
	key: string;
	label: string;
	width?: number;
	align?: 'left' | 'center' | 'right'
}

export interface ITableProps {
	columns: ITableColumn[];
	rows?: NonNullable<unknown>[];
}
