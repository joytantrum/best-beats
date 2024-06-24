
import axios from 'axios';

// Function to fetch user's playlists
export const fetchUserPlaylists = async (accessToken) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user playlists:', error.response?.data || error.message);
        return null;
    }
};