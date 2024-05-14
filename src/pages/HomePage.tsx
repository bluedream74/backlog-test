import { useSearchParams } from "react-router-dom";
import ExternalRedirect from "../components/core/ExternalRedirect";
import { useEffect, useState } from "react";
import CenteredCircularProgress from "../components/elements/CenteredCircularProgress";
import BacklogCodeCheck from "../components/BacklogCodeCheck";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/dashboard/Dashboard";

const HomePage = () => {
  const auth = useAuth();
  const [searchParams] = useSearchParams();

  const accessToken = auth.accessToken;
  const refreshToken = auth.refreshToken;

  const code = searchParams.get('code');

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if(isLoaded) {
    if (accessToken && refreshToken) {
      return <Dashboard />;
    } else if (code) {
      return <BacklogCodeCheck code={code} />;
    } else {
      return (
        <ExternalRedirect url="https://nulab-exam.backlog.jp/OAuth2AccessRequest.action?response_type=code&client_id=RHrMJDSovwIrGetZfgy0KbSzpzC7jVgr&redirect_uri=http://localhost:3000&state=12345" />
      );
    }
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <CenteredCircularProgress />
      </div>
    );
  }
}
 
export default HomePage;
