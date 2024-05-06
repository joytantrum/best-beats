// MainContainer.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Components
import MainNavigator from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/TabBar.js';

// Screens
import LoginScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/LoginScreen.js';
import ExploreScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ExploreScreen.js';
import PlayScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/PlayScreen.js';
import ActivityScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ActivityScreen.js';
import MessagesScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/MessagesScreen.js';
import ProfileScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ProfileScreen.js';

const Stack = createStackNavigator();

const MainContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            <View style={styles.container}>
                {isAuthenticated ? (
                    <MainNavigator />
                ) : (
                    <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
                        <Stack.Screen name="Login" options={{ headerShown: false }}>
                            {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Play" component={PlayScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                )}
            </View>
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default MainContainer;