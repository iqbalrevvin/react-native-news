import {AsyncStorage, Alert} from 'react-native'
import CreateDataContext from './CreateDataContext'
import firebase from '../firebase/firebase'
import {Toast} from 'native-base'
import {NEWS_API} from '../api/NewsApi'

const AuthReducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading: true,
                message: action.payload,
            }
        case 'NO-LOADING':
            return {
                ...state,
                loading: false,
                message:''
            }
        default:
            return state
    }
}


const Signin = dispatch => async (email, password, callback) => {
    console.log(dispatch)
    dispatch({type: 'LOADING', payload: 'Account Authentication...'})
    try {       
        let response = await firebase.auth().signInWithEmailAndPassword(email, password)
        AsyncStorage.setItem('login', JSON.stringify(response.user))
        dispatch({type: 'NO-LOADING'})
        return callback()
    } catch (err) {
        Toast.show({
            text: "Check your input again!",
            buttonText: "Retry",
            position: "bottom",
            type:'danger',
            duration: 2000
        })
        Alert.alert('Sorry...', err.toString())
        dispatch({type: 'NO-LOADING'})
    }
}

const Signup = dispatch => async (name, email, password, callback) => {
    dispatch({type: 'LOADING', payload: 'Registering an Account...'})
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, password).then(userCredentials => {
                dispatch({type: 'NO-LOADING'})
                Alert.alert("Welcome...", "Your account has been registered!");
                userCredentials.user.updateProfile({
                    displayName: name
                }).then(res => {
                    AsyncStorage.setItem('login', JSON.stringify(userCredentials.user))
                })
                if(callback){
                    callback()
                }   
            })
    } catch (err){
        Toast.show({
            text: "Check your input again!",
            buttonText: "Retry",
            position: "bottom",
            type:'danger',
            duration: 2000
        })
        Alert.alert('Sorry...', err.toString())
        dispatch({type: 'NO-LOADING'})
    }
}


export const {Provider, Context} = CreateDataContext(
    AuthReducer,
    {Signin, Signup},
    {loading: false, message:''}
)