import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ReadOnlyAccessGuardedRoute = ({ children }: { children: React.ReactNode }): React.ReactNode => {
	const { accessToken } = useAuth();
	const location = useLocation();
	if (!accessToken) return <Navigate to="/" state={{ from: location }} replace />;
	return children;
}

export default ReadOnlyAccessGuardedRoute;
