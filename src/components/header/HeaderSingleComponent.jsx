import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, Left, Body, Right, Title, Subtitle, Button, Icon } from 'native-base'


console.disableYellowBox = true

const HeaderSingleComponent = ({navigation, title, subtitle}) => {
    return (
        <View>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{ right:50 }}>
                    <Title> {title} </Title>
                    {subtitle && (
                        <Subtitle> {subtitle} </Subtitle>
                    )}
                </Body>
            </Header>
        </View>
    )
}

export default HeaderSingleComponent


