import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import CustomText from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/CustomText.js';

const StatusItem = ({ author, content, onRepost }) => {
    const [liked, setLiked] = useState(false);
    const [reposted, setReposted] = useState(false);

    const handleLikePress = () => {
        setLiked(!liked); // Toggle the 'liked' state
    };

    const handleRepostPress = () => {
        if (onRepost) {
            onRepost(); // Call the onRepost callback
        }
    };
    return (
        <View style={styles.statusContainer}>
            {/* User's profile picture */}
            <Image
                source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png')}
                style={styles.profilePicture}
            />

            <View style={styles.statusContent}>
                <CustomText style={styles.author} weight="bold">{author}</CustomText>
                <CustomText style={styles.content} color="white">{content}</CustomText>

                {/* Container for icons */}
                <View style={styles.iconsContainer}>
                    {/* Heart icon */}
                    <TouchableOpacity onPress={handleLikePress}>
                        <Ionicons name={liked ? 'heart' : 'heart-outline'} size={20} color="white" style={styles.icon} />
                    </TouchableOpacity>

                    {/* Repeat icon */}
                    <TouchableOpacity onPress={handleRepostPress}>
                        <Ionicons name="repeat-outline" size={20} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    author: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    content: {
        color: '#fff',
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    statusContent: {
        flex: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end', // Align icons to the right
    },
    icon: {
        marginLeft: 5, // Add some spacing between icons
        marginRight: 10,
    },
});

export default StatusItem;
