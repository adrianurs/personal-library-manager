import { CssBaseline } from '@mui/material';
import { Home } from './pages';
import { BooksProvider, ThemeProvider } from './providers';
import { Layout } from './components';

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
      <BooksProvider>
        <Layout>
          <Home />
        </Layout>
			</BooksProvider>
		</ThemeProvider>
	);
}

export default App;
