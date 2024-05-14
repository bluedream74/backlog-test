import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const ReadOnlyAccessGuardedRoute = ({ children }: { children: React.ReactNode }): React.ReactNode => {
	const auth = useAuth();
	
	useEffect(() => {
		auth.getOwnUser();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { accessToken } = useAuth();
	const location = useLocation();
	if (!accessToken) return <Navigate to="/" state={{ from: location }} replace />;
	return children;
}

export default ReadOnlyAccessGuardedRoute;
