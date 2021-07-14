import React, {useState} from 'react';
import UserContext from "../context/UserContext";

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});

  const clearUser = () => {
    setUser({});
  }
  return (
    <UserContext.Provider value={{user, setUser, clearUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
