
import { authorize } from 'react-native-app-auth';
import { ResponseType, useAuthRequest } from 'expo-auth-session';

const fetchUserData = async (accessToken) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const userData = await response.json();
        console.log('User Data:', userData); // Log user data
        //setUserData(userData); // Set user data in state
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

//export default fetchUserData;
