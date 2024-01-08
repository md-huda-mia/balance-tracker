import React, { Children, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // ====== user Login =====
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ====== Logout ========
  const logout = () => {
    // setLoading(true);
    // localStorage.removeItem("user");
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        setUser(user);
      } catch (error) {
        console.error("Error setting user:", error);
      }
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [user]);
  const authentication = {
    createUser,
    userUpdateProfile,
    userLogin,
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
