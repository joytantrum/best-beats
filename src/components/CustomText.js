import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const CustomText = ({ children, style, size = 'medium', weight = 'regular', color }) => {
    const textColor = getColor(color); // Get the appropriate color value

    return (
        <RNText style={[styles[size], styles[weight], { color: textColor }, styles.baseText, style]}>
            {children}
        </RNText>
    );
};

const getColor = (color) => {
    switch (color) {
        case 'white':
            return '#FFFFFF';
        case 'black':
            return '#000000';
        default:
            return color || '#000000'; // Default to black if no color is specified
    }
};

const styles = StyleSheet.create({
    baseText: {
        fontSize: 16, // Default font size
        fontWeight: '400', // Default font weight
    },
    small: {
        fontSize: 14,
    },
    medium: {
        fontSize: 16,
    },
    large: {
        fontSize: 20,
    },
    semibold: {
        fontWeight: '600',
    },
    bold: {
        fontWeight: '900',
    },
});

export default CustomText;
