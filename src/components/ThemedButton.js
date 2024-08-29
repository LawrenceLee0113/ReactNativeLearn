// src/components/ThemedButton.js
import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '@context/ThemeContext';

const ThemedButton = ({ children = "Content Here" }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const buttonStyle = StyleSheet.create({
        button: {
            backgroundColor: theme.backgroundColor,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },
        text: {
            color: theme.textColor,
            fontSize: 16,
        },
    });

    return (
        <TouchableOpacity style={buttonStyle.button} onPress={() => toggleTheme()}>
            <Text style={buttonStyle.text}>{ children }</Text>
        </TouchableOpacity>
    );
};

export default ThemedButton;
