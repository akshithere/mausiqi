import axios from 'axios';
export default class AuthController {
    async getSpotifyToken(authorizationCode: string, codeVerifier: string){
        const data = await axios.post('https://accounts.spotify.com/api/token',new URLSearchParams({
            grant_type: 'authorization_code',
            code: authorizationCode,
            redirect_uri: 'mausiqi-login://callback',
            client_id: process.env.EXPO_PUBLIC_CLIENT_ID ?? '',
            code_verifier: codeVerifier,
        }),{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        return {
            data,
            error: null
        }
    }
}