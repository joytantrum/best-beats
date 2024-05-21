
// auth.js

import { useNavigation } from '@react-navigation/native';
import { useAuthRequest } from 'expo-auth-session';

import { authorize } from 'react-native-app-auth';
import { ResponseType, useAuthRequest } from 'expo-auth-session';

const useAuthentication = (setIsAuthenticated) => {
    const navigation = useNavigation();
    const [response, promptAsync] = useAuthRequest(
        {
            clientId: '68710bff46b942739d8a602383b88e34',
            redirectUri: 'exp://192.168.40.44:8081',
            responseType: 'token',
            scopes: ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-read-currently-playing',
                'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read', 'user-read-playback-position',
                'user-top-read', 'user-read-recently-played', 'user-library-read'],
            usePKCE: false,
        },
        { authorizationEndpoint: 'https://accounts.spotify.com/authorize' }
    );

    const handleSpotifySignIn = async () => {
        // Start the authorization flow
        promptAsync();
    };

    // Handle the response from the authorization flow
    useEffect(() => {
        if (response?.type === 'success') {
            setIsAuthenticated(true);
            navigation.navigate('Explore');
        }
    }, [response]);

    return handleSpotifySignIn;
};

//export default useAuthentication;

