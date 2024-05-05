import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import CustomText from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/CustomText.js';

const Playlists = ({ name, description }) => {
    return (
        <View style={styles.playlistContainer}>
            {/* Image */}
            <Image
                source={require("/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png")}
                style={styles.playlistImage}
            />

            {/* Playlist Name and Description */}
            <View style={styles.playlistContent}>
                <CustomText style={styles.playlistName} size="small" color="white" weight="bold">{name}</CustomText>
                <CustomText style={styles.playlistDescription} size="small" color="gray" weight="regular">{description}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    playlistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    playlistImage: {
        width: 40,
        height: 40,
        borderRadius: 0,
        marginRight: 10,
    },
    playlistContent: {
        flex: 1,
    },

});

export default Playlists;