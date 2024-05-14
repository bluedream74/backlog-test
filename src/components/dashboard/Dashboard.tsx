import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Avatar, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

const Dashboard = () => {
  const { user, getOwnUser } = useAuth();

  useEffect(() => {
    getOwnUser();
  }, [])

  if (user) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-200 gap-6">
        <div className="flex flex-col justify-center items-center shadow hover:shadow-lg bg-white rounded p-8 cursor-pointer">
          <Avatar
            alt={user.name}
            src={user.nulabAccount.iconUrl}
            sx={{ width: 224, height: 224 }}
          />
          <p className="pt-[30px] font-bold text-3xl">{user.name}</p>
        </div>
        <hr className="pt-30" />
        <Button variant="contained" endIcon={<Send />}>
          トップに行く
        </Button>
      </div>
    );
  } else {
    return null;
  }
}
 
export default Dashboard;