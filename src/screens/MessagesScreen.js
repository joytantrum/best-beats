import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Button.js';
import MessageItem from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/MessageItem.js';
import Header from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Header.js';


const MessagesScreen = ({ navigation }) => {
    const messages = [
        { id: '1', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '2', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '3', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '4', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '5', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '6', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '7', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '8', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '9', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '10', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '11', sender: 'John Doe', message: 'Hello!', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },
        { id: '12', sender: 'Jane Smith', message: 'How are you?', profilePic: require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png') },

    ];

    const renderMessageItem = ({ item }) => (
        <MessageItem
            sender={item.sender}
            message={item.message}
            profilePic={item.profilePic}
        />
    );

    const handleLikesPress = () => {
        navigation.goBack();
    };

    const handleMessagesPress = () => {
        navigation.navigate('Messages');
    };

    return (
        <LinearGradient
            colors={['#9E00FF', '#0E0017']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.6 }} style={styles.gradient}>
            <View style={styles.container}>
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
                    data={messages}
                    renderItem={renderMessageItem} // Updated renderItem to use renderMessageItem function
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 80,
        paddingBottom: 20,
    },
    list: {
        flex: 1,
    },
    headerButtonText: {
        color: '#fff',
    },
});

export default MessagesScreen;
