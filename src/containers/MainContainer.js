// MainContainer.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/context/userContext.js'; 

// Components
import MainNavigator from '../components/TabBar';

// Screens
import LoginScreen from '../screens/LoginScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PlayScreen from '../screens/PlayScreen';
import ActivityScreen from '../screens/ActivityScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const MainContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <UserProvider>
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
        </UserProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default MainContainer;