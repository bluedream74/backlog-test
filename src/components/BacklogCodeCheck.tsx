import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

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
    <>Code Reviewing</>
  );
}
 
export default BacklogCodeCheck;
