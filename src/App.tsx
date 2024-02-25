import { ThemeProvider, BooksProvider, FiltersProvider } from './providers';
import { Layout } from './components';
import { Home } from './pages';
import { CssBaseline } from '@mui/material';

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<BooksProvider>
				<FiltersProvider>
					<Layout>
						<Home />
					</Layout>
				</FiltersProvider>
			</BooksProvider>
		</ThemeProvider>
	);
}

export default App;
