import React, { Fragment, useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import {Context as NewsContext} from '../../services/context/NewsContext'
import { Card, CardItem, Body, Text, Spinner } from 'native-base';
import { Image } from 'react-native';



var { width } = Dimensions.get('window')
const NewsComponent = ({navigation}) => {
    const [select_category, setSelectCategory] = useState('')
    const {state, CategoryList, NewsList} = useContext(NewsContext)

    useEffect(() => {
        CategoryList()
        NewsList('')
        return () => {
            setSelectCategory(0)
        };
    }, []);

   
    // let category = [
    //     { id: 1, name: 'category1' },
    //     { id: 2, name: 'category2' },
    //     { id: 3, name: 'category3' },
    //     { id: 4, name: 'category3' },
    //     { id: 5, name: 'category3' },
    //     { id: 6, name: 'category3' },
    //     { id: 7, name: 'category3' },
    //     { id: 8, name: 'category3' },
    // ]

    // let news = [
    //     { id: 1, title: 'Russians Again Targeting Americans With Disinformation, Facebook and Twitter Say', category: 'Economy', created_at: '3 Minutes Ago' },
    //     { id: 2, title: 'Facebook Braces Itself for Trump to Cast Doubt on Election Results', category:'Economy', created_at: '6 Hours Ago' },
    //     { id: 2, title: 'Facebook Braces Itself for Trump to Cast Doubt on Election Results', category:'Economy', created_at: '6 Hours Ago' },
    //     { id: 2, title: 'Facebook Braces Itself for Trump to Cast Doubt on Election Results', category:'Economy', created_at: '6 Hours Ago' },
    //     { id: 2, title: 'Facebook Braces Itself for Trump to Cast Doubt on Election Results', category:'Economy', created_at: '6 Hours Ago' }
    // ]

    const _renderItemTheme = (item) => {
        return (
            <TouchableOpacity key={item.id} onPress={() => setSelectCategory(item.id)}>
                <View style={select_category == item.id ? styles.divTheme : styles.divTheme2}>
                    <Text style={select_category == item.id ? styles.textTheme : styles.textTheme2}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderNews = (item) => {
        if(select_category=='' || select_category==item.category_id){
            return (
                <Card>
                    <CardItem>
                        <Body>
                            <View style={styles.sectionNews}>
                                <Image style={styles.imagenews} source={{uri : item.image}} />
                                <View style={styles.contentSection}>
                                    <TouchableOpacity onPress={() => navigation.navigate('NewsDetail',{
                                        id: item.id,
                                        title: item.title,
                                        image: item.image
                                    })}>
                                        <Text style={styles.titleNews} numberOfLines={2}>{item.title}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.themeNews}>{item.category}</Text>
                                    <Text style={{color:'grey'}}>{item.created_at}</Text>
                                </View>
                            </View> 
                        </Body>
                    </CardItem>
                </Card>
            )
        }
    }

    return (
        <Fragment>
            {/* <Text>{JSON.stringify(state.newsList)}</Text> */}
            {state.loading&&(
                <Spinner color='blue'/>
            )}
            {!state.loading&&(
                <Fragment>
                    <View style={{ height: 45 }}>
                        <FlatList
                            horizontal={true}
                            data={state.categoryList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => _renderItemTheme(item)}
                        />
                    </View>
                    <FlatList
                        data={state.newsList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => _renderNews(item)}
                    />
                </Fragment>
            )}
        </Fragment>
    )
}

export default NewsComponent

const styles = StyleSheet.create({
    divTheme: {
        height: 42,
        borderTopWidth: 3,
        padding: 10,
        borderColor: 'yellow',
        backgroundColor: 'white'
    },
    divTheme2: {
        height: 42,
        borderBottomWidth: 5,
        borderColor: 'blue',
        padding: 10,
        backgroundColor: '#343434'
    },
    textTheme: {
        color: 'black',
    },
    textTheme2: {
        color: 'white',
    },
    sectionNews:{  
        width: width-10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    imagenews:{
        width: width/4.5,
        height: width/4.5,
        resizeMode: 'cover',
        borderRadius: 5,
        marginRight:10
    },
    contentSection:{
        padding:5,
    },
    titleNews:{
        width:((width/1.6)),
        fontSize:18,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    themeNews:{
        color: 'blue',
        fontSize: 20
    },
})
