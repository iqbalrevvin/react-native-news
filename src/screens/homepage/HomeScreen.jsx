import React, { Fragment, useState, useContext, useCallback } from 'react'
import { RefreshControl } from 'react-native'
import {Context as NewsContext} from '../../services/context/NewsContext'
import HeaderComponent from '../../components/header/HeaderComponent';
import BannerComponent from '../../components/Home/BannerComponent';
import { Content } from 'native-base';
import NewsComponent from '../../components/Home/NewsComponent';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const HomeScreen = ({navigation}) => {
    const {CategoryList, NewsList} = useContext(NewsContext)
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        CategoryList()
        NewsList('')
        setRefreshing(true);
        wait(1500).then(() => {
            setRefreshing(false)
        });
    }, [refreshing]);

    
    return (
        <Fragment>
            <HeaderComponent title='Home | News App'/>
            <Content refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <BannerComponent />
                <NewsComponent navigation={navigation}/>
            </Content>
        </Fragment>
    )
}

export default HomeScreen


