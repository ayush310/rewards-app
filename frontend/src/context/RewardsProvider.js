import { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

const RewardsContext = createContext();

const RewardsProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [rewards, setRewards] = useState([]);
  const [limit, setLimit] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <RewardsContext.Provider
      value={{ user, setUser, rewards, setRewards, limit, setLimit }}
    >
      {children}
    </RewardsContext.Provider>
  );
};

export const RewardsState = () => {
  return useContext(RewardsContext);
};

export default RewardsProvider;
