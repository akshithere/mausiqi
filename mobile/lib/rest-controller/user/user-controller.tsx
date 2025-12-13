import axios from "axios";

export default class UserController {
    getTopArtists(){
        axios.get('https://api.spotify.com/v1/me/top/artists')
    }
}