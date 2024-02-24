import { FC, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '../../config';

export const ThemeProvider: FC<{ children: ReactNode }> = ({children}) => {
	return (
		<MuiThemeProvider theme={theme}>
			{children}
		</MuiThemeProvider>
	);
}
