
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './CustomText.js';

const Button = ({ onPress, children, size = 'medium', color = 'white', backgroundColor, borderRadius }) => {
    let buttonStyle;

    // Determine styles based on button size
    switch (size) {
        case 'small':
            buttonStyle = styles.smallButton;
            break;
        case 'large':
            buttonStyle = styles.largeButton;
            break;
        default:
            buttonStyle = styles.mediumButton;
            break;
    }

    // Merge custom backgroundColor and borderRadius (if provided !!  )
    if (backgroundColor) {
        buttonStyle.backgroundColor = backgroundColor;
    }
    if (borderRadius) {
        buttonStyle.borderRadius = borderRadius;
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={styles.buttonText} color={color}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mediumButton: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    smallButton: {
        backgroundColor: '#7A00CC',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    largeButton: {
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
});

export default Button;