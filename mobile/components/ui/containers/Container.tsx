import { ColorsType } from "@/constants/colors";
import UseTheme from "@/hooks/context-hooks/use-theme";
import { ReactNode, useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Container({
  children,
  styles: overrideStyle,
}: {
  children?: ReactNode;
  styles?: ViewStyle | ViewStyle[];
}) {
  const { colors } = UseTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <SafeAreaView style={[style.container, overrideStyle]}>
      {children}
    </SafeAreaView>
  );
}

const styles = (colors: ColorsType["light"] | ColorsType["dark"]) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white[100],
    },
  });
