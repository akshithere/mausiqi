import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import {
  useAuthRequest,
  ResponseType,
  CodeChallengeMethod,
} from "expo-auth-session";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const redirectUri = "mausiqi-login://callback";

export default function useSpotifyLogin() {
  console.log("Spotify Redirect URI:", redirectUri);

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Code,
      clientId: process.env.EXPO_PUBLIC_CLIENT_ID || '',
      scopes: [
        "user-read-email",
        "user-read-private",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "streaming",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private"
      ],
      redirectUri: redirectUri,
      usePKCE: true,
      codeChallengeMethod: CodeChallengeMethod.S256,
    },
    discovery
  );
  WebBrowser.maybeCompleteAuthSession();

  useEffect(() => {
    console.log('response is: ', response);
    if(response && response.type === 'success'){
        console.log('Authorization code received:', response.params.code);
        // TODO: Exchange the code for an access token
        // You'll need to send this code to your backend to exchange for a token
        // OR use expo-auth-session's exchangeCodeAsync if you have a client secret
    }
    if(response && response.type === 'error'){
        console.error('Auth error:', response.error);
    }
  }, [response])

  return {
    promptAsync,
    request,
    response,
  };
}
