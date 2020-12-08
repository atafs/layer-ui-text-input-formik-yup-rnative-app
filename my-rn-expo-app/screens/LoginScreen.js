import React from 'react';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from '../config/colors';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}>
                    {({
                        handleChange,
                        handleSubmit,
                        errors,
                        setFieldTouched,
                        touched,
                    }) => (
                        <>
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                onBlur={() => {
                                    setFieldTouched('email');
                                }}
                                onChangeText={handleChange('email')}
                                placeholder="Email"
                                // iOS only: auto fill from keychain
                                textContentType="emailAddress"
                            />
                            <ErrorMessage
                                error={errors.email}
                                visible={touched.email}
                            />
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                placeholder="Password"
                                onBlur={() => {
                                    setFieldTouched('password');
                                }}
                                onChangeText={handleChange('password')}
                                secureTextEntry
                                // iOS only: auto fill from keychain
                                textContentType="password"
                            />
                            <ErrorMessage
                                error={errors.password}
                                visible={touched.password}
                            />
                            <AppButton
                                title="Login"
                                onPress={() => handleSubmit}
                            />
                        </>
                    )}
                </Formik>
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
