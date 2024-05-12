import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import CenteredCircularProgress from '../components/elements/CenteredCircularProgress';
import ExternalRedirect from '../components/core/ExternalRedirect';

// Lazy load all pages
const UnauthorizedPage = React.lazy(() => import('../pages/UnAuthorizedPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

export default function AppRoutes(): React.JSX.Element {
	return (
		<div>
			<Routes>
				{/* Core Routes */}
				<Route element={<UnauthorizedPage />} path="unauthorized" />

				{/* Read Only User Routes */}
				<Route
					path="/"
					element={
						<Suspense fallback={<CenteredCircularProgress />} >
							<ExternalRedirect url="https://nulab-exam.backlog.jp/OAuth2AccessRequest.action?response_type=code&client_id=RHrMJDSovwIrGetZfgy0KbSzpzC7jVgr&redirect_uri=http://localhost:3000/home&state=12345" />
						</Suspense>
					}
				/>

				<Route
					path="home"
					element={
						<Suspense fallback={<CenteredCircularProgress />}>
							<HomePage />
						</Suspense>
					}
				/>

				<Route element={<NotFoundPage />} path="*" />
			</Routes>
		</div>
	);
}
