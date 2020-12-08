import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
    return <LoginScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
