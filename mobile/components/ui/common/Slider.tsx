import { Image, ImageSource } from "expo-image";
interface SliderProps {
  uri: ImageSource;
}
export default function Slider({ uri }: SliderProps) {
  return (
      <Image source={uri} style={{height:'100%', width:'100%'}} />
  );
}
