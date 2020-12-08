import React from 'react';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import * as Yup from 'yup';

import AppFormField from '../components/AppFormField';
import AppForm from '../components/AppForm';
import SubmitButton from '../components/SubmitButton';

import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from '../config/colors';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

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
                <AppForm
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
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                keyboardType="email-address"
                                placeholder="Email"
                                name="email"
                                // iOS only: auto fill from keychain
                                textContentType="emailAddress"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                                // iOS only: auto fill from keychain
                                textContentType="password"
                            />
                            <SubmitButton title="Login" />
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
