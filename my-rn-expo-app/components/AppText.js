import * as React from 'react';
import { View, Text, StyleSheet, ImagePropTypes } from 'react-native';
import colors from '../config/colors';

const AppText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.danger,
        padding: 5,
    },
});

export default AppText;
