import './App.scss';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AppRoutes from './routes/AppRoutes';
import AuthProvider from './provider/AuthProvider';

export default function App(): React.JSX.Element {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</AuthProvider>
	);
}
