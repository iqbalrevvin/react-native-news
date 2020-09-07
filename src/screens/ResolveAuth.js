import React, { useEffect } from 'react'
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import firebase from '../services/firebase/firebase'

const ResolveAuth = ({navigation}) => {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                navigation.replace('Index')
            }else{
                navigation.replace('Welcome')
            }
        });
        return () => {
            null
        };
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color='blue' type='large' />
            <Text style={{ color: 'grey', marginVertical:10 }}>Pelase Wait. . .</Text>
        </View>
    )
}

export default ResolveAuth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
