import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import CenteredCircularProgress from '../components/elements/CenteredCircularProgress';
import ReadOnlyAccessGuardedRoute from './ReadOnlyAccessGuardedRoute';

// Lazy load all pages
const Layout = React.lazy(() => import('../components/layout/Layout'));
const UnauthorizedPage = React.lazy(() => import('../pages/UnAuthorizedPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ProjectPage = React.lazy(() => import('../pages/ProjectPage'));
const NewProjectPage = React.lazy(() => import('../pages/NewProjectPage'));

export default function AppRoutes(): React.JSX.Element {
	return (
		<Suspense fallback={<CenteredCircularProgress />} >
			<Routes>
				{/* Core Routes */}
				<Route element={<UnauthorizedPage />} path="unauthorized" />

				<Route
					path="/"
					element={
						<HomePage />
					}
				/>

				<Route
					path="/"
					element={
						<ReadOnlyAccessGuardedRoute>
							<Layout />
						</ReadOnlyAccessGuardedRoute>
					}
				>
					<Route
						path='projects'
					>
						<Route 
							path='new'
							element={
								<NewProjectPage />
							}
						/>
						<Route
							path=''
							element={
								<ProjectPage />
							}
						/>
					</Route>
				</Route>
				
				<Route element={<NotFoundPage />} path="*" />
			</Routes>
		</Suspense>
	);
}
