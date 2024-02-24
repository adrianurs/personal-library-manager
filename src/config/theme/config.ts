import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#003049", // Dark blue
      light: "#4285f4", // Lighter blue
      dark: "#001e3c", // Darker blue
    },
    secondary: {
      main: "#d62828", // Red
      light: "#f75e5e", // Lighter red
      dark: "#9b1c1c", // Darker red
    },
    error: {
      main: "#f77f00", // Orange
    },
    warning: {
      main: "#fcbf49", // Yellow
		},
		background: {
			default: "#eae2b7"
		}
  },
});
