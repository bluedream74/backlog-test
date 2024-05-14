import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import CenteredCircularProgress from '../components/elements/CenteredCircularProgress';
import ReadOnlyAccessGuardedRoute from './ReadOnlyAccessGuardedRoute';

// Lazy load all pages
const UnauthorizedPage = React.lazy(() => import('../pages/UnAuthorizedPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ProjectPage = React.lazy(() => import('../pages/ProjectPage'));

export default function AppRoutes(): React.JSX.Element {
	return (
		<Routes>
			{/* Core Routes */}
			<Route element={<UnauthorizedPage />} path="unauthorized" />

			<Route
				path="/"
				element={
					<Suspense fallback={<CenteredCircularProgress />} >
						<HomePage />
					</Suspense>
				}
			/>

			<Route
				path="/projects"
				element={
					<ReadOnlyAccessGuardedRoute>
						<Suspense fallback={<CenteredCircularProgress />}>
							<ProjectPage />
						</Suspense>
					</ReadOnlyAccessGuardedRoute>
				}
			/>

			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	);
}
