import React, {  } from 'react'
import HeaderComponent from '../../components/header/HeaderComponent';
import { Container, Content } from 'native-base';
import NewsDetailComponent from '../../components/Home/DetailNewsComponent';

export default function NewsDetailScreen({route, navigation}){
    const {id, title, image} = route.params

    return (
        <Container>
            <HeaderComponent title={title} leftIcon='arrow-back' leftAction={() => navigation.goBack()}/>
            <Content>
                <NewsDetailComponent id={id} title={title} image={image} />
            </Content>
        </Container>
    )
}
