import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            {/* Centered Logo */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/logo.png')} style={styles.logo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 60,
        alignItems: 'center', 
    },
    logo: {
        width: 50,
        height: 50,
        paddingBottom: 50,
    },
});

export default Header;
