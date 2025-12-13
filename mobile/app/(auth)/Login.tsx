import SpotifyLogin from "./SpotifyLogin";
import { Text } from "react-native";
import Header from "@/components/ui/common/Header";
import Container from "@/components/ui/containers/Container";
export default function Login() {
  return (
    <Container>
      <Header />
      <Text>This is the Login Page</Text>
      <SpotifyLogin />
    </Container>
  );
}
