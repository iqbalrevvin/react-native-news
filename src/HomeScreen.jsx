

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const HomeScreen = ({navigation}) => {
    return (
        <Container>
            <Header primary>
                <Left>
                    <Button transparent  onPress={() => alert('action')}><Icon name='md-disc' /></Button>
                </Left>
                <Body><Title>Header</Title></Body>
                <Right />
            </Header>
            <Content>
                <Text>
                    This is Content Section
                </Text>
                <Button large primary onPress={() => navigation.navigate('Screen2')}>
                <Text>Dark Large</Text>
                </Button>
            </Content>

        </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
