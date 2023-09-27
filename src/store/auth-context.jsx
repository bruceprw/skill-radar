import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    userType: 0,
    firstName: null,
    lasttName: null,
    userContact: null,

});

export default AuthContext;