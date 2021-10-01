import React from 'react';

const AuthContext = React.createContext({
    currentUser: {},
    register: (email,password) => {},
    login: (email,password) => {},
    logout: ()=> {}
});

export default AuthContext;


//create context -> Generate a global state
//create provider -> who emmit the context
//use the context -> Get the context provider emmit