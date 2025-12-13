import {
  useAuthRequest,
  ResponseType,
  CodeChallengeMethod,
} from "expo-auth-session";
import RestControllerInstance from "@/lib/rest-controller";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Button } from "react-native";
import Container from "@/components/ui/containers/Container";

export default function SpotifyLogin() {
  WebBrowser.maybeCompleteAuthSession();

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/token",
  };

  const redirectUri = "mausiqi-login://callback";

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: process.env.EXPO_PUBLIC_CLIENT_ID ?? "",
      redirectUri,
      scopes: [
        "user-read-email",
        "user-read-private",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-top-read",
        "streaming",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private",
      ],
      usePKCE: true,
      codeChallengeMethod: CodeChallengeMethod.S256,
    },
    discovery
  );

  useEffect(() => {
    const getToken = async () => {
      if (response && response?.type === "success") {
      // console.log("response is: ", response.params.code);
      // console.log('about to make the getSpotifyToken call')
      const { data, error } =
          await RestControllerInstance.authController.getSpotifyToken(
          response.params.code,
          request?.codeVerifier as string
        );
      console.log('access token after getSpotifyToken >>>> :', data.data.access_token);
      console.log('data after getSpotifyToken:', error);

    }
    }
    void getToken();
  }, [response, request?.codeVerifier]);

  return (
    <Container>
      <Button
        disabled={!request}
        title="login"
        onPress={() => {
          promptAsync();
        }}
      ></Button>
    </Container>
  );
}
