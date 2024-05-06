import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ActivityItem from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/ActivityItem.js';
import Button from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Button.js';
import Header from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Header.js';

const ExploreScreen = ({ navigation }) => {
    const likes = [
        { id: '1', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '2', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '3', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '4', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '5', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '6', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '7', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '8', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '9', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '10', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '11', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '12', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '13', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '14', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        { id: '15', user: { name: 'John Doe', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'like' },
        { id: '16', user: { name: 'Jane Smith', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') }, type: 'repost' },
        // Add more likes as needed
    ];

    const handleLikesPress = () => {
        navigation.navigate('Explore');
    };

    const handleMessagesPress = () => {
        navigation.navigate('Messages');
    };

    return (
        <LinearGradient colors={['#9E00FF', '#0E0017']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.6 }} style={styles.gradient}>
            <Header />
            <View style={styles.headerContainer}>
                <Button size="medium" backgroundColor="rgba(255, 255, 255, 0.2)" onPress={handleLikesPress}>
                    <Text style={styles.headerButtonText}>Likes</Text>
                </Button>
                <Button size="medium" backgroundColor="rgba(255, 255, 255, 0.2)" onPress={handleMessagesPress}>
                    <Text style={styles.headerButtonText}>Messages</Text>
                </Button>
            </View>

            <FlatList
                data={likes}
                renderItem={({ item }) => <ActivityItem item={item} />}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
        paddingBottom: 20,
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    likeContent: {
        flex: 1,
        marginLeft: 10, 
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    list: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 0,
        paddingTop: 10,
    },
    author: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    interactionContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    interactionRow: {
        flexDirection: 'row', // Row layout for icon and text
        alignItems: 'center', // Center items vertically within the row
        marginRight: 10, // Add spacing between icon and text
    },
    icon: {
        marginRight: 5, // Add spacing between icon and text
    },
    interactionText: {
        color: '#fff',
        fontSize: 13,
    },
});

export default ExploreScreen;