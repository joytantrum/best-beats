import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/logo.png')}
            />
            <Text style={styles.title}>BEST BEATS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 50,
        backgroundColor: '#333333',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 8,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
});

export default Header;
