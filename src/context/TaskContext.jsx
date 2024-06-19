import { createContext, useContext, useState } from "react";
import { client } from "../supabase/client";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const loginWithMagicLink = async (email) => {
    
    setLoading(true);
    
    try {
      const { error } = await client.auth.signInWithOtp({ email });
      if (error) {
        throw error;
      }
      alert("check your email for the magic link");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <TaskContext.Provider
      value={{
        loginWithMagicLink,
        loading,
        logout
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};