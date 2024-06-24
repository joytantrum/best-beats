
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Authorization
import { useAuthRequest } from 'expo-auth-session';

// Import UserContext for storing userData
import { UserContext } from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/context/userContext.js';

const LoginScreen = ({ setIsAuthenticated, navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    // Use the UserContext to access setUserData
    const { setUserData } = useContext(UserContext);

    // Spotify OAuth configuration
    const [request, response, promptAsync] = useAuthRequest(
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

    // Function to fetch user data using access token
        const fetchUserData = async (accessToken) => {
        try {
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const userData = await response.json();
            console.log('User Data:', userData);
            setUserData(userData);
            return userData;  // Return the fetched user data
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    };

    const handleSignIn = () => {
        if (email && password) {
            setIsAuthenticated(true);
            navigation.navigate('Explore');
        } else {
            console.log('Manual Sign-In Error');
        }
    };

    // Start the authorization flow
    const handleSpotifySignIn = async () => {
        promptAsync();
    };

    // Handle the response from the authorization flow & store the data 
    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            console.log('Spotify Sign In Result:', access_token);
            fetchUserData(access_token)
                .then(userData => {
                    setIsAuthenticated(true);
                    navigation.navigate('Profile', { userData });
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [response]);

    return (
        <LinearGradient
            colors={['#9E00FF', '#0E0017']}
            style={styles.gradient}
        >
            <ScrollView style={styles.container}>
                <Image
                    source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/logo.png')}
                    style={styles.logo} // Define logo style (if needed)
                />
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={'email'}
                    keyboardType={'email-address'}
                    placeholderTextColor={'grey'}
                    color={'white'}
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder={'password'}
                    keyboardType={'default'}
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    color={'white'}
                />
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handleSignIn}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signInSpotifyButton}
                    onPress={handleSpotifySignIn}
                >
                    <Text style={styles.signInButtonText}>Sign In with Spotify</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 80,
    },
    regularText: {
        fontSize: 24,
        padding: 10,
        marginVertical: 8,
        color: 'white',
        textAlign: 'center',
    },
    inputBox: {
        backgroundColor: "transparent",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8,
    },
    signInButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8
    },
    signInSpotifyButton: {
        backgroundColor: "#1DB954",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderColor: "#C0C0C0",
        borderWidth: 0.8
    },
    signInButtonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default LoginScreen;