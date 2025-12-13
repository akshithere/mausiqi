import { FlatList, View, StyleSheet, Text, ViewToken } from "react-native";
import Romantic from "@/assets/images/romantic.svg";
import Listening from "@/assets/images/listening.svg";
import Chill from "@/assets/images/chill.svg";
import { Fonts } from "@/constants/fonts";

import { Dispatch, RefObject, SetStateAction, useMemo, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Spaces } from "@/constants/space";
import { ColorsType } from "@/constants/colors";
import useTheme from "@/hooks/context-hooks/use-theme";

export default function Carousel({
  setActiveIndex,
  ref
}: {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  ref: RefObject<FlatList | null>
}) {
  const { colors } = useTheme();
  const style = useMemo(() => createStyles(colors), [colors]);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      console.log("viewableItems: ", viewableItems);
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveIndex(viewableItems[0].index);
      }
    }
  );
  const OnboardingData = [
    {
      id: 0,
      image: Romantic,
      text: "Music is Life",
    },
    {
      id: 1,
      image: Listening,
      text: "Connect with people with interesting music",
    },
    {
      id: 2,
      image: Chill,
      text: "Connect with people with interesting lives",
    },
  ];
  return (
    <FlatList
      data={OnboardingData}
      ref={ref}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
      renderItem={({ item }) => {
        const SvgComponent = item.image;
        return (
          <View style={style.imageContainer}>
            <SvgComponent height="100%" width="100%" />
            <View style={style.textContainer}>
              <Text style={style.textStyles}>{item.text}</Text>
            </View>
          </View>
        );
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
}

const createStyles = (colors: ColorsType["light"] | ColorsType["dark"]) =>
  StyleSheet.create({
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: hp("60%"),
      width: wp("100%"),
    },
    textContainer: {
      maxWidth: wp("70%"),
    },
    textStyles: {
      fontFamily: Fonts.plusJakarta.medium500,
      fontSize: Spaces.xxxl,
      textAlign: "center",
      color: colors.black[100],
    },
  });
