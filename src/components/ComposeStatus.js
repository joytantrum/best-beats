import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/CustomText.js';
import Button from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Button.js';

const ComposeStatus = ({ newTweet, setNewTweet, handlePostTweet }) => {
    return (
        <View style={styles.container}>
            {/* Profile picture and input container */}
            <View style={styles.profileInputContainer}>
                {/* User's profile picture */}
                <Image
                    source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png')}
                    style={styles.profilePicture}
                />

                {/* Input for composing tweet */}
                <TextInput
                    placeholder="What's happening?"
                    style={styles.input}
                    value={newTweet}
                    onChangeText={setNewTweet}
                    multiline
                />
            </View>

            {/* Container for icons and post button */}
            <View style={styles.actionContainer}>
                {/* Icons */}
                <View style={styles.iconsContainer}>
                    <Ionicons name="headset-outline" size={20} color="white" style={styles.icon} />
                    <Ionicons name="image-outline" size={20} color="white" style={styles.icon} />
                </View>

                {/* Post button */}
                <Button size="small" backgroundColor="#7A00CC" onPress={handlePostTweet}>
                    Post
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    profileInputContainer: {
        flexDirection: 'row', // Display profile picture and input in a row
        alignItems: 'center', // Center vertically
        marginBottom: 10,
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    input: {
        backgroundColor: 'transparent',
        color: '#fff',
        flex: 1, // Take remaining space
        minHeight: 40, // Set minimum height for input
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 5,
    },
    postButtonContainer: {
        backgroundColor: '#7A00CC',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    postButton: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ComposeStatus;