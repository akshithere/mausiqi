import { useRouter, Stack } from "expo-router";
import React, { useEffect } from "react";
import useOnboardingComplete from "@/hooks/util-hooks/use-onboarding-complete";

export default function StackLayout() {
  const router = useRouter();
  const { isOnboardingComplete } = useOnboardingComplete();

  // NOTE: StackLayout is rendering (render phase) and router.replace internally updates
  // the NavigationContainerInner (another component/fiber). Doing that during render is unsafe.
  // Wrapping it in useEffect ensures StackLayout finishes rendering first, then navigation runs safely.

  useEffect(() => {
    if (isOnboardingComplete) router.replace("/(auth)/Login");
  }, [isOnboardingComplete, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="SpotifyLogin"></Stack.Screen>
      <Stack.Screen name="Login"></Stack.Screen>
    </Stack>
  );
}
