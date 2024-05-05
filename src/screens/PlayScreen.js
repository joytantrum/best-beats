import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
//import Text from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Text.js';
import Button from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Button.js';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';
import VideoPlayer from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/VideoPlayer.js';

export default function PlayScreen({ navigation }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [position, setPosition] = useState(null);
    const sound = useRef(new Audio.Sound());


    useEffect(() => {
        const loadAudio = async () => {
            try {
                await sound.current.loadAsync(require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/Song.mp3'));
                const { durationMillis } = await sound.current.getStatusAsync();
                setDuration(durationMillis);
            } catch (error) {
                console.log('Error loading audio:', error);
            }
        };

        loadAudio();

        return () => {
            sound.current.unloadAsync();
        };
    }, []);

    const togglePlayback = async () => {
        try {
            if (isPlaying) {
                await sound.current.pauseAsync();
            } else {
                await sound.current.playAsync();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.log('Error toggling playback:', error);
        }
    };

    const updateTime = async () => {
        const { positionMillis } = await sound.current.getStatusAsync();
        setPosition(positionMillis);
    };

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(updateTime, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying]);

    const formatTime = (millis) => {
        if (millis === null) return '--:--';

        const totalSeconds = Math.floor(millis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const progressBarWidth = (position / duration) * 100 || 0;

    const progressBar = (
        <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBackground} />
            <View style={[styles.progressBar, { width: `${progressBarWidth}%` }]} />
        </View>
    );

    // Placeholder data for the currently playing song
    const currentlyPlayingSong = {
        title: "Song Title",
        artist: "Artist Name",
        // Add more properties as needed from the Spotify API response
    };

    return (
        <LinearGradient
            colors={['#9E00FF', '#0E0017']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                {/* Section for Currently Playing Song */}
                <View style={styles.musicContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.musicText, { fontWeight: 'bold', fontSize: 16 }]} color="white" weight="bold">
                            {currentlyPlayingSong.title}
                        </Text>
                        <Text style={styles.musicText} color="white">
                            {currentlyPlayingSong.artist}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={togglePlayback}>
                        <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={40} color="#FFFFFF" />
                    </TouchableOpacity>
                    {progressBar}
                </View>

                {/* Video Section */}
                <View style={styles.videoContainer}>
                    <Video
                        source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/placeholder.mp4')} // Specify the path to your video file
                        shouldPlay={isPlaying}
                        resizeMode="cover"
                        style={styles.video}
                    />
                </View>
                {/* Button Section (Placeholder) */}
                <Button size="large" backgroundColor="rgba(39, 38, 64, 0.2)" onPress={() => {/* Handle button press */ }}>
                    <Text style={styles.buttonText} color="white">Generate New</Text>
                </Button>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    musicContainer: {
        backgroundColor: 'rgba(39, 38, 64, 0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: 350,
        height: 100,
        borderRadius: 25,
        marginVertical: 25,
        borderColor: "#C0C0C0",
        borderWidth: 0.5,
        position: 'relative',
    },
    musicText: {
        color: '#FFFFFF',
    },
    progressBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        height: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        left: 10,
        right: 10,
    },
    progressBarBackground: {
        position: 'absolute',
        borderRadius: 5,
        bottom: 0,
        left: 10,
        right: 10,
        height: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    buttonContainer: {
        backgroundColor: 'rgba(39, 38, 64, 0.2)',
        padding: 10,
        width: 200,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 25,
        borderColor: "#C0C0C0",
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: 15,
    },
    video: {
        borderRadius: 15,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', // Cover the entire container horizontally
        height: '100%', // Cover the entire container vertically
    },
    videoContainer: {
        width: 350,
        height: 250,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        position: 'relative', // Ensure the container is relative for absolute positioning
    },


});
