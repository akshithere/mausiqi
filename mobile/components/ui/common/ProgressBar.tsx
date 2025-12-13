import { StyleSheet, View } from "react-native";
import useTheme from "@/hooks/context-hooks/use-theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ColorsType } from "@/constants/colors";
import { useMemo } from "react";

interface ProgressInterface {
  count: number;
  active: number;
}
export default function ProgressBar({ count, active }: ProgressInterface) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors, active), [colors, active]);
  return (
    <View style={styles.progressContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          style={[
            styles.progressBar,{backgroundColor: index <= active ? colors.black[100] : "#a7a7b2ff",}
          ]}
          key={index}
        >
        </View>
      ))}
    </View>
  );
}

const createStyles = (
  colors: ColorsType["light"] | ColorsType["dark"],
  index: number
) =>
  StyleSheet.create({
    progressContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      maxWidth: wp("80%"),
    },
    progressBar: {
      borderRadius: 30,
      gap: wp("2%"),
      height: hp("0.5%"),
      width: wp("30%"),
      marginHorizontal: wp("1%"),
    },
  });
