import React, { useState } from 'react';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    // iOS only: auto fill from keychain
                    textContentType="emailAddress"
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    // iOS only: auto fill from keychain
                    textContentType="password"
                />
                <AppButton
                    title="Login"
                    onPress={() =>
                        console.log('email and password', email, password)
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 75,
    },
    container: {
        padding: 10,
    },
});

export default LoginScreen;
