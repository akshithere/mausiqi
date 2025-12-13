import { ColorsType } from "@/constants/colors";
import useTheme from "@/hooks/context-hooks/use-theme";
import { useMemo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: string;
  isDouble?: boolean;
}

export default function Button({ title, onPress, variant }: ButtonProps) {
  console.log('i am inside the button component');
  const { colors } = useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
      <Pressable style={style.itemContainer} onPress={onPress}>
        <Text style={style.textStyles}>{title}</Text>
      </Pressable>
  );
}

const styles = (colors: ColorsType["light"] | ColorsType["dark"]) =>
  StyleSheet.create({
    itemContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.black[100],
      height: hp("5%"),
      width: wp("88%"),
      borderRadius: 25,
    },
    textStyles: {
      color: colors.white[100],
    },
  });
