import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/CustomText.js';

const MessageItem = ({ sender, message, profilePic }) => {
    return (
        <View style={styles.messageContainer}>
            <Image source={profilePic} style={styles.profilePicture} />
            <View style={styles.messageContent}>
                <CustomText style={styles.sender} weight="bold" size="small">{sender}</CustomText>
                <CustomText style={styles.message} color="white" size="small">{message}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        //width: '100%',
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    messageContent: {
        flex: 1,

    },
    sender: {
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    message: {
        color: '#fff',
    },
});

export default MessageItem;
