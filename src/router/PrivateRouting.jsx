import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const PrivateRoute = ({ children }) => {
    const { userId } = useContext(UserContext);
    return userId!==null ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;