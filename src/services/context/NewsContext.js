import {AsyncStorage, Alert} from 'react-native'
import CreateDataContext from './CreateDataContext'
import {NEWS_API} from '../api/NewsApi'

const NewsReducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading: true,
                message: action.payload
            }
        case 'NO-LOADING':
            return {
                ...state,
                loading: false,
                message: ''
            }
        case 'CATEGORY-LIST':
            return {
                ...state,
                categoryList:action.payload
            }
        case 'NEWS-LIST':
            return {
                ...state,
                newsList:action.payload
            }
        case 'BANNER-LIST':
            return {
                ...state,
                bannerList:action.payload
            }
        case 'NEWS-DETAIL':
            return {
                ...state,
                newsDetail:action.payload
            }
        default:
            return state
    }
}

const BannerList = dispatch => async () => {
    dispatch ({type: 'LOADING', payload: 'Please Wait...'})
    try {
        let response = await fetch(`${NEWS_API}/news`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: ''
        })
        let responseJson = await response.json()
        // alert(JSON.stringify(responseJson))
        if(responseJson.status === 'success'){
            dispatch({type: 'NO-LOADING'})
            dispatch({type: 'BANNER-LIST', payload: responseJson.data.banner})
        }else{
            alert(responseJson.message)
            dispatch({type: 'NO-LOADING'})
        }
    } catch (err) {
        dispatch({type: 'NO-LOADING'})
        // alert(JSON.stringify(err))
        alert(err)
    }
}

const CategoryList = dispatch => async () => {
    dispatch ({type: 'LOADING', payload: 'Please Wait...'})
    try {
        let response = await fetch(`${NEWS_API}/category`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: ''
        })
        let responseJson = await response.json()
        // alert(JSON.stringify(responseJson))
        if(responseJson.status === 'success'){
            dispatch({type: 'NO-LOADING'})
            dispatch({type: 'CATEGORY-LIST', payload: responseJson.data.category})
        }else{
            alert(responseJson.message)
            dispatch({type: 'NO-LOADING'})
        }
    } catch (err) {
        dispatch({type: 'NO-LOADING'})
        // alert(JSON.stringify(err))
        alert(err)
    }
}

const NewsList = dispatch => async (keyword) => {
    dispatch ({type: 'LOADING', payload: 'Please Wait...'})
    try {
        let response = await fetch(`${NEWS_API}/news?keyword=${keyword}`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: ''
        })
        let responseJson = await response.json()
        // alert(JSON.stringify(responseJson))
        if(responseJson.status === 'success'){
            dispatch({type: 'NO-LOADING'})
            dispatch({type: 'NEWS-LIST', payload: responseJson.data.news})
            return responseJson.data.news
        }else{
            Alert.alert('Failed To Get Data!', 'News not found!')
            dispatch({type: 'NO-LOADING'})
        }
    } catch (err) {
        dispatch({type: 'NO-LOADING'})
        // alert(JSON.stringify(err))
        alert(err)
    }
}

const NewsDetail = dispatch => async (id) => {
    dispatch ({type: 'LOADING', payload: 'Please Wait...'})
    try {
        let response = await fetch(`${NEWS_API}/news/${id}`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: ''
        })
        let responseJson = await response.json()
        // alert(JSON.stringify(responseJson))
        if(responseJson.status === 'success'){
            dispatch({type: 'NO-LOADING'})
            dispatch({type: 'NEWS-DETAIL', payload: responseJson.data.news})
        }else{
            alert(responseJson.message)
            dispatch({type: 'NO-LOADING'})
        }
    } catch (err) {
        dispatch({type: 'NO-LOADING'})
        // alert(JSON.stringify(err))
        alert(err)
    }
}


export const {Provider, Context} = CreateDataContext(
    NewsReducer,
    {CategoryList, NewsList, BannerList, NewsDetail},
    {loading: false, message: '', categoryList:[], newsList:[], bannerList:[], newsDetail:''}
)