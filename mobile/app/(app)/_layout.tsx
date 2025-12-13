import { Redirect, Stack } from "expo-router";
import UseAuth from "@/hooks/context-hooks/use-auth";
export default function RootLayout() {
    const {isAuthenticated} = UseAuth();
    console.log('isAuthenticated recieved from useAuth is: ', isAuthenticated);
    if(!isAuthenticated.current) return <Redirect href={'/(auth)'} />
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
