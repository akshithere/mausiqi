import { useContext } from "react";
import { AuthContext } from "@/components/context/auth/AuthContext";
export default function UseAuth() {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error('Could not use auth context');
  }
  return context;
}
