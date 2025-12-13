import ProgressBar from "@/components/ui/common/ProgressBar";
import Carousel from "@/components/ui/common/Carousel";
import Container from "@/components/ui/containers/Container";
import Button from "@/components/ui/common/Button";
import useOnboardingComplete from "@/hooks/util-hooks/use-onboarding-complete";
import { useRef, useState } from "react";
import { FlatList } from "react-native";
import { router } from "expo-router";

export default function OnboardingScreen() {
  console.log('onboarding screen is called');
  const count = 3;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { updateOnboardingToTrue } = useOnboardingComplete();

  const flatListRef = useRef<FlatList>(null);
  const moveSlider = () => {
    if (activeIndex + 1 < count) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex + 1,
      });
      setActiveIndex((prev) => prev + 1);
    } else{
      updateOnboardingToTrue();
      router.replace('/(auth)/Login')
    }
  };

  return (
    <Container
      styles={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar count={count} active={activeIndex} />
      <Carousel setActiveIndex={setActiveIndex} ref={flatListRef} />
      <Button title="next" onPress={moveSlider} variant="primary" />
    </Container>
  );
}
