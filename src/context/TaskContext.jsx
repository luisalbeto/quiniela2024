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
  const [ task, setTask ] = useState([]) 

  const user = client.auth.getUser()
  console.log(user)
  

  const getTasks = async () => {
    const result = await client.from('scores').select().eq('userId', (await user).data.user.id)
    console.log(result)

  }


 
  const loginWithMagicLink = async (email) => {
    
    setLoading(true);
    
    try {
      const { error } = await client.auth.signInWithOtp({ email });
      if (error) {
        throw error;
      }
      alert("Revisa tu correo e inicia sesion a través del Magic Link");
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
        task,
        loginWithMagicLink,
        loading,
        logout,
        getTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};