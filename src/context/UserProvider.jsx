import React , { createContext , useState , useMemo} from 'react'

import propTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [userId,setUserId] = useState(null);

    const UserValue = useMemo(() => {
        return {
            userId,
            logIn:(data) => setUserId(data),
            logOut:() => setUserId(null)
        }
    },[userId])

  return (
    <UserContext.Provider value={UserValue}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.protoTypes = {
    children: propTypes.node.isRequired
}

export default UserProvider