import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, AntDesign } from '@expo/vector-icons'; 

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
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
                <Text style={styles.title}>Stay connect with our news</Text>
                <Text style={styles.text}>Update knowledge information in your hand!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.replace('Signin')}>
                        <LinearGradient 
                            style={styles.signIn}
                            colors={['#05375a', '#5db8f3']}> 
                            <Text style={styles.textSign}>Started</Text>
                            <AntDesign name='login' color='white' size={20} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default WelcomeScreen
const {height} = Dimensions.get('screen')
const height_logo = height * 0.7 * 0.4;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#303f9f'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems: 'center'
    },
    body:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:75,
        paddingHorizontal:25
    },
    logo:{
        width: 250,
        height: 250
    },
    title:{
        color: '#303f9f',
        fontWeight: 'bold',
        fontSize:30,
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold',
        marginHorizontal:10
    }
})
