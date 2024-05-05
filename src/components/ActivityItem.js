import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from './CustomText.js';

const ActivityItem = ({ item }) => {
    return (
        <View style={styles.likeContainer}>
            <Image source={item.user.profilePic} style={styles.profilePicture} />
            <View style={styles.likeContent}>

                <Text style={styles.author} weight="bold" color="white">{item.user.name}</Text>
                <View style={styles.interactionContainer}>
                    <View style={styles.interactionRow}>
                        {item.type === 'like' ? (
                            <Ionicons name="heart" size={15} color="white" style={styles.icon} />
                        ) : (
                            <Ionicons name="repeat" size={15} color="white" style={styles.icon} />
                        )}
                        <Text style={styles.interactionText} color="white">
                            {item.type === 'like' ? 'Liked your status' : 'Reposted your status'}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    author: {
        fontSize: 16,
        marginBottom: 5,
    },
    interactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    icon: {
        marginRight: 5,
    },
    interactionText: {
        fontSize: 13,
    },
});

export default ActivityItem;
