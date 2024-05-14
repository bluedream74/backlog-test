import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import CenteredCircularProgress from '../components/elements/CenteredCircularProgress';

// Lazy load all pages
const UnauthorizedPage = React.lazy(() => import('../pages/UnAuthorizedPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

export default function AppRoutes(): React.JSX.Element {
	return (
		<Routes>
			{/* Core Routes */}
			<Route element={<UnauthorizedPage />} path="unauthorized" />

			{/* Read Only User Routes */}
			<Route
				path="/"
				element={
					<Suspense fallback={<CenteredCircularProgress />} >
						<HomePage />
					</Suspense>
				}
			/>

			{/* <Route
				path="home"
				element={
					<Suspense fallback={<CenteredCircularProgress />}>
						<HomePage />
					</Suspense>
				}
			/> */}

			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	);
}
