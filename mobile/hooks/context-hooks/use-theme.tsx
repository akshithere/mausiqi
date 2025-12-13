import { useContext } from "react";
import { ThemeContext } from "@/components/context/theme/ThemeProvider";
export default function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('could not find theme context');
    }
    return context
}