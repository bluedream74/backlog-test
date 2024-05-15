import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import CenteredCircularProgress from "./elements/CenteredCircularProgress";

interface BacklogCodeCheckProps {
  code: string;
}

const BacklogCodeCheck: React.FC<BacklogCodeCheckProps> = ({
  code
}) => {
  const auth = useAuth();

  useEffect(() => {
    auth.getTokenFromCode(code);
  }, [code, auth]);

  return (
    <CenteredCircularProgress />
  );
}
 
export default BacklogCodeCheck;
