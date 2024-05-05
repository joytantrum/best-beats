import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import ComposeStatus from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/ComposeStatus.js';
import StatusItem from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/StatusItem.js';


export default function ActivityScreen({ navigation }) {
    const [newTweet, setNewTweet] = useState('');
    const [tweets, setTweets] = useState([
        { id: '1', author: '@User1', content: 'This is post 1' },
        { id: '2', author: '@User2', content: 'This is post 2' },
        { id: '3', author: '@User3', content: 'This is post 3' },
        { id: '4', author: '@User4', content: 'This is post 4' },
        { id: '5', author: '@User5', content: 'This is post 5' },
        { id: '6', author: '@User6', content: 'This is post 6' },
        { id: '7', author: '@User7', content: 'This is post 7' },
        { id: '8', author: '@User8', content: 'This is post 8' },
        { id: '9', author: '@User9', content: 'This is post 9' },
        { id: '10', author: '@User10', content: 'This is post 10' },
        { id: '11', author: '@User11', content: 'This is post 11' },
        { id: '12', author: '@User12', content: 'This is post 12' },
        // Add more tweets as needed
    ]);

    const handlePostTweet = () => {
        if (newTweet.trim() !== '') {
            const newTweetObj = {
                id: (tweets.length + 1).toString(),
                author: '@CurrentUser', // Replace with the actual user's name
                content: newTweet.trim(),
            };
            setTweets([newTweetObj, ...tweets]);
            setNewTweet('');
        }
    };

    const handleRepostTweet = (tweetId, originalContent) => {
        const currentUser = '@CurrentUser'; // Replace with the current user's name

        const repostedTweet = {
            id: (tweets.length + 1).toString(),
            author: currentUser,
            content: originalContent,
            reposted: true,
        };

        setTweets([repostedTweet, ...tweets]);
    };

    const renderItem = ({ item }) => (
        <StatusItem
            author={item.author}
            content={item.content}
            onRepost={() => handleRepostTweet(item.id, item.content)}
        />
    );

    return (
        <LinearGradient colors={['#9E00FF', '#0E0017']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.6 }} style={styles.gradient}>
            <View style={styles.header}>
                {/* Centered Logo */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/logo.png')} style={styles.logo} />
                </View>
            </View>

            <ComposeStatus
                newTweet={newTweet}
                setNewTweet={setNewTweet}
                handlePostTweet={handlePostTweet}
            />

            <FlatList
                data={tweets}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    logo: {
        width: 60,
        height: 30, // Adjust as per your logo aspect ratio
        paddingBottom: 50,
    },
    list: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 0,
        paddingTop: 10,
    },
});
