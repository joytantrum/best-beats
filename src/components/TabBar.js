import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import ActivityScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ActivityScreen.js';
import PlayScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/PlayScreen.js';
import ExploreScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ExploreScreen.js';
import ProfileScreen from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/screens/ProfileScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ExploreHome" component={ExploreScreen} options={{ headerShown: false }} />
           
            {/* Add more screens for ExploreStack as needed */}
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            switch (route.name) {
                case 'Activity':
                    iconName = focused ? 'home-sharp' : 'home-outline';
                    break;
                case 'Play':
                    iconName = focused ? 'play-sharp' : 'play-outline';
                    break;
                case 'Explore':
                    iconName = focused ? 'eye-sharp' : 'eye-outline';
                    break;
                case 'Profile':
                    iconName = focused ? 'person-sharp' : 'person-outline';
                    break;
                default:
                    break;
            }

            return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 1,
            borderTopColor: 'black',
            height: 70,
            position: 'relative',
        },
        tabBarLabelStyle: {
            fontSize: 12,
        },
        contentStyle: {
            flex: 1,
        },
    });

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Play" component={PlayScreen} />
            <Tab.Screen name="Explore" component={ExploreStack} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainNavigator;
