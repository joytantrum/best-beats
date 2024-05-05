import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { WaveformAnalyzer } from '@react-native-community/audio-toolkit';

const VideoPlayer = ({ isPlaying }) => {
    const [waveformAnalyzer, setWaveformAnalyzer] = useState(null);
    const [animatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
        const initializeWaveformAnalyzer = async () => {
            const analyzer = new WaveformAnalyzer();
            await analyzer.open('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/Song.mp3');
            setWaveformAnalyzer(analyzer);
        };

        initializeWaveformAnalyzer();

        return () => {
            if (waveformAnalyzer) {
                waveformAnalyzer.stop();
                waveformAnalyzer.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const animation = Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000, // Adjust duration as needed
                useNativeDriver: true,
            })
        );

        waveformAnalyzer && waveformAnalyzer.start();

        animation.start();

        return () => {
            animation.stop();
            waveformAnalyzer && waveformAnalyzer.stop();
        };
    }, [isPlaying, waveformAnalyzer]);

    const animatedStyle = {
        transform: [{ scaleX: animatedValue }],
    };

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/placeholder.mp4' }}
                resizeMode="cover"
                style={styles.video}
                useNativeControls
            />
            <Animated.View style={[styles.animation, animatedStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    animation: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'red', // Adjust color as needed
        height: '100%',
    },
});

export default VideoPlayer;
