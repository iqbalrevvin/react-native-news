import React, {useState, useContext} from 'react'
import {Context as AuthContext} from '../../services/context/AuthContext'
import { StyleSheet, View, TextInput, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, Alert } from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Button, Text } from 'native-base';

const SigninScreen = ({navigation}) => {
    const {state, Signin} = useContext(AuthContext)
    
    const [data, setData] = useState({
        change_textInputChange: false,
        secureTextEntry: true,
    })
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const textInputChange = (value) => {
        setUsername(value.replace(/\s/g, ''))
        if(value.length > 5){
            setData({
                ...data,
                check_textInputChange: true
            })
        }else{
            setData({
                ...data,
                check_textInputChange: false
            })
        }
    }

    const secureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleSignin = () => {
        if(username==='' && password===''){
            Alert.alert('Uppsss...', 'All input parameters must be filled!')
        }else{
            return Signin(username, password, () => navigation.replace('ResolveAuth'))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                        animation='bounceIn'
                        duration={1500}
                        source={require('../../../assets/news.png')}
                        style={styles.logo}
                        resizeMode={'stretch'}
                    />
            </View>
            <Animatable.View animation='fadeInUpBig' style={styles.body}>
                <ScrollView behavior='padding'>
                    <Text style={styles.title}>Login Account</Text>
                    <Text style={styles.description}>Login with registered account</Text>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name='user-o' color='#05375a' size={20} />
                        <TextInput 
                            textContentType='username'
                            autoCapitalize='none'
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Registered Email' 
                            style={styles.textInput} 
                            value={username}
                            onChangeText={(text) => textInputChange(text)}
                        />
                        {data.check_textInputChange ? 
                            <Animatable.View animation='bounceIn'>
                                <Feather name='check-circle' color='green' size={20} />
                            </Animatable.View>
                            : null
                        }
                    </View>
                    <Text style={[styles.text_footer,{marginTop:15}]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name='lock' color='#05375a' size={20} />
                        <TextInput 
                            textContentType='password'
                            secureTextEntry={data.secureTextEntry}
                            placeholder='**************' 
                            style={styles.textInput} 
                            value={password}
                            autoCapitalize='none'
                            onChangeText={(text) => setPassword(text.replace(/\s/g, ''))}
                        />
                        <TouchableOpacity onPress={secureTextEntry}>
                            <Feather name={data.secureTextEntry ? 'eye-off':'eye'} color='gray' size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Button transparent primary onPress={() => navigation.navigate('Signup')}>
                            <Text style={{ fontWeight:'bold' }}>Account Registration</Text>
                        </Button>
                        {/* <Button transparent primary>
                            <Text style={{ fontWeight:'bold' }}>Lupa Kata Sandi</Text>
                        </Button> */}
                    </View>
                    
                    <View style={styles.button}>
                        {!state.loading && (
                            <TouchableOpacity onPress={handleSignin}>
                                <LinearGradient style={styles.signIn} colors={['#303f9f', '#5db8f3']}> 
                                    <Text style={styles.textSign}>LOGIN</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                        {state.loading && (
                            <LinearGradient style={styles.signIn} colors={['gray', 'darkgray']}> 
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
                    </ScrollView>    
            </Animatable.View>
        </SafeAreaView>
    )
}

export default SigninScreen

const {height, width} = Dimensions.get('screen')
const height_logo = height * 0.4 * 0.4;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#303f9f',
        paddingTop:10
    },
    header:{
        flex:1.5,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo:{
        width: height_logo*1.4,
        height: height_logo*1.4
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    body:{
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    title:{
        color: 'midnightblue',
        fontWeight: 'bold',
        fontSize:30,
    },
    description:{
        color: 'midnightblue',
        fontSize:15,
        marginBottom:20
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'midnightblue',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'black'
    },
    button:{
        alignItems:'center',
        marginTop:20
    },
    signIn:{
        width:width*0.9,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
