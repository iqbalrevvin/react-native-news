import {AsyncStorage, Alert} from 'react-native'
import CreateDataContext from './CreateDataContext'
// import {FOOD_API} from '../api/FoodApi'

const UserReducer = (state, action) => {
    switch(action.type){
        case 'USER-PROFILE':
            return {
                ...state,
                userProfile: action.payload
            }
        default:
            return state
    }
}

const UserLogin = dispatch => async () => {
    const getCredential = await AsyncStorage.getItem('login')
    if(getCredential){
        let credential = JSON.parse(getCredential)
        dispatch({type:'USER-PROFILE', payload:credential})
    }else{
        alert('NOT-LOGIN')
    }
}

export const {Provider, Context} = CreateDataContext(
    UserReducer,
    {UserLogin},
    {loading: false, message: '', userProfile:''}
)