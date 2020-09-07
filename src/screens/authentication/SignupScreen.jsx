import React, { useState, useContext, useEffect } from 'react'
import { Context as AuthContext } from '../../services/context/AuthContext'
import { StyleSheet, Alert, View, TouchableOpacity, Dimensions } from 'react-native'
import { Content, Form, Item, Input, Label, Icon, Text, H1, Picker } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SignupScreen = ({ navigation }) => {
    const { state, Signup } = useContext(AuthContext)
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password} = value
    
    const handleChangeText = name => e => {
        let event = name !== 'name' ? e.replace(/\s/g, '') : e
        setValue({
            ...value,
            [name]: event
        })
    }

    const handleSignup = () => {
        if (name === '' || email === '' || password === '') {
            Alert.alert('Uppsss...', 'All input parameters must be filled!')
        } else {
            return Signup(name, email, password)
        }
        // alert(JSON.stringify(value))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Animatable.Image 
                        animation='bounceIn'
                        duration={1500}
                        source={require('../../../assets/sttg.png')}
                        style={styles.logo}
                        resizeMode={'stretch'}
                    /> */}
                <H1 style={{ color: 'white' }}>Account Registration</H1>
            </View>
            <Animatable.View animation='fadeInUpBig' style={styles.body}>
                <Content behavior='padding' showsVerticalScrollIndicator={false}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>Account Register</Text>
                        <Text style={styles.description}>Register with a valid email!</Text>
                    </View>

                    <Form>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' />
                            <Input placeholder='Your Name' value={name} onChangeText={handleChangeText('name')} />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-mail' />
                            <Input placeholder='Email' autoCapitalize='none' textContentType='username' value={email} onChangeText={handleChangeText('email')} />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-key' />
                            <Input placeholder='Password' autoCapitalize='none' textContentType='password' value={password} onChangeText={handleChangeText('password')} secureTextEntry />
                        </Item>
                    </Form>

                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={{ color: 'midnightblue', marginTop: 10, marginHorizontal: 10, fontWeight: 'bold' }}>Already have an account</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        {!state.loading && (
                            <TouchableOpacity onPress={handleSignup}>
                                <LinearGradient style={styles.signIn} colors={['#303f9f', '#5db8f3']}>
                                    <Text style={styles.textSign}>REGISTER</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                        {state.loading && (
                            <LinearGradient style={styles.signIn} colors={['darkgrey', 'grey']}>
                                <Text style={styles.textSign}>{state.message}</Text>
                            </LinearGradient>
                        )}
                        {/* <TouchableOpacity 
                            onPress={() => navigation.navigate('Welcome')}
                            style={[styles.signIn, {borderColor:'#4dc2f8', borderWidth:1, marginTop:15}]}
                        >
                            <Text style={[styles.textSign,{color:'#4dc2f8'}]}>Sign Up</Text>
                        </TouchableOpacity> */}
                    </View>
                </Content>
            </Animatable.View>
        </View>
    )
}

export default SignupScreen

const { height, width } = Dimensions.get('screen')
const height_logo = height * 0.4 * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303f9f',
        paddingTop: 10
    },
    titleSection:{
        marginHorizontal:10
    },  
    header: {
        flex: 0.7,
        justifyContent: 'center',
        marginHorizontal: 20,
        top: 10
    },
    logo: {
        width: height_logo * 1.4,
        height: height_logo * 1.4
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 30
    },
    title: {
        color: 'midnightblue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    description: {
        color: 'midnightblue',
        fontSize: 15,
        marginBottom: 5
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: 'midnightblue',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    input: {
        marginVertical: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: width * 0.9,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})
