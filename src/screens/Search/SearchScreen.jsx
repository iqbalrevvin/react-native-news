import React, {Fragment, useState, useContext, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import {Context as NewsContext} from '../../services/context/NewsContext'
import { Container, Header, Item, Input, Icon, Button, Text, Left, Right, Content } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListComponent from '../../components/search/ListComponent';

export default function SearchScreen({navigation}) {
    const {state, NewsList} = useContext(NewsContext)

    const [keyword, setKeyword] = useState('')
    const [news_data, setNewsData] = useState([])
    const handleReset = () => {
        setKeyword('')
        setNewsData([])
    }

    useEffect(() => {
        setNewsData([])
        return () => {
            NewsList('')
        }
    }, [])

    const handleChangeText = name => e => {
        setKeyword(e)
    }

    const handleSearch = () => {
        NewsList(keyword).then(res => {
            setNewsData(res)
        })
    }

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </TouchableOpacity>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" value={keyword} onChangeText={handleChangeText('keyword')} autoFocus={true} />
                    {keyword !== '' && (
                        <TouchableOpacity onPress={handleReset}>
                            <Icon name="ios-close-circle" />
                        </TouchableOpacity>
                    )}
                </Item>
            </Header>
            {keyword !== '' && (
                <Text style={{margin:10, color:'grey'}}>Your Keyword : "{keyword}"</Text>
            )}
            {keyword === '' && (
                <Text style={{margin:10, color:'grey'}}>Type keyword in the "search" field</Text>
            )}
            {keyword !== '' && (
                <Button small primary iconRight style={{margin:10}} onPress={handleSearch}>
                    <Text>Search</Text>
                    <Icon name="ios-search" />
                </Button>
            )}
            {/* <Text> {JSON.stringify(news_data)} </Text> */}
            <Content>
                <ListComponent news_data={news_data} navigation={navigation} />
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({})
