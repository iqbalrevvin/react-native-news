import React, { Fragment, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import {Context as NewsContext} from '../../services/context/NewsContext'
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'

var {width} = Dimensions.get('window')

const BannerComponent = () => {
    const {state, BannerList} = useContext(NewsContext)

    useEffect(() => {
        BannerList()
        return () => {
            null
        };
    }, []);

    return (
        <Fragment>
            <View style={{height:250}}>
                <Swiper>
                    {state.bannerList.map((item,i) => (
                        <ImageBackground key={i} style={{ width: width, height: 250 }} source={{ uri: item.image }}>
                            <LinearGradient style={styles.fondoBanner} colors={['transparent', 'black']}>
                                <Text style={styles.textBanner}>{item.title}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    ))}
                </Swiper>
            </View>
        </Fragment>
    )
}

export default BannerComponent

const styles = StyleSheet.create({
    fondoBanner:{
        flex:1,
        justifyContent:'flex-end',
        padding:10
    },
    textBanner:{
        fontSize:20,
        color: 'white',
    },
})
