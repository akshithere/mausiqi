import useTheme from "@/hooks/context-hooks/use-theme";
import { RelativePathString } from "expo-router";
import { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { ColorsType } from "@/constants/colors";
import BackButton from "@/assets/icons/BackButton/BackButton";
import logo from "@/assets/images/logo.png";

interface HeaderProps {
  goBack?: RelativePathString;
}

export default function Header({ goBack }: HeaderProps) {
  const { colors } = useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      {goBack ? (
        <View style={style.leftView}>
          <BackButton stroke={colors.black[100]} />
        </View>
      ) : null}
      <View style={style.centerView}>
        <Image source={logo} style={style.logo} contentFit="contain" />
      </View>
      <View style={style.rightView}>
        <Text style={style.headerText}>right view</Text>
      </View>
    </View>
  );
}

const styles = (colors: ColorsType["light"] | ColorsType["dark"]) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: colors.white[100],
      color: colors.white[100],
      justifyContent: "space-between",
      alignContent: "center",
      paddingHorizontal: 10,
      height: 60,
      position: "relative",
    },
    leftView: {
      alignItems: "flex-start",
      flex: 1,
      justifyContent: "center",
    },
    centerView: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    rightView: {
      alignItems: "flex-end",
      justifyContent: "center",
      flex: 1,
    },
    headerText: {
      color: colors.black[100],
    },
    logo: {
      height: 56,
      width: 56,
    },
  });
