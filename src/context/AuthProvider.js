
import { useState,useEffect } from 'react';
import AuthContext from './auth-context';
import { auth } from  '../services/firebase';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
const AuthProvider = (props) => {

    // register
    // login
    // logout
    // currentUser
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    const register = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logout = () => {
        signOut(auth);
    }

    const authContext = {
        currentUser,
        register,
        login,
        logout
    }

    useEffect(() => {

        let unsubscriber = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscriber;
    }, []);


    return (
        <AuthContext.Provider value={authContext}>
            { !loading && props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;