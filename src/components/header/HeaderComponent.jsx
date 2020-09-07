import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Subtitle } from 'native-base';
var { height, width } = Dimensions.get('window')


const HeaderComponent = ({ leftIcon, leftAction, imageSource, title, rightIcon, rightAction, rightIcon2, rightAction2, badgeValue1, badgeValue2 }) => {
    return (
        <View>
            <Header noLeft primary>
                <Left style={{ flex: 1 }}>
                    {leftIcon && (
                        <Button transparent onPress={leftAction}><Icon name={leftIcon} /></Button>
                    )}
                </Left>
                <Body style={{ flex: 1 }}>
                    {imageSource && (
                        <Image resizeMode='contain' style={styles.logoImage} source={{ uri: imageSource }}></Image>
                    )}
                    {title && (
                        <Title style={{ alignSelf: 'center', fontWeight: 'bold', width:width/1.3 }}>{title}</Title>
                    )}
                </Body>
                <Right style={{ flex: 1 }}>
                    {rightIcon && (
                        <Button transparent onPress={rightAction}><Icon name={rightIcon} />
                            {badgeValue1 && (
                                <Badge>
                                    <Text> {badgeValue1} </Text>
                                </Badge>
                            )}
                        </Button>
                    )}
                    {rightIcon2 && (
                        <Button transparent onPress={rightAction2}><Icon name={rightIcon2} />
                            {badgeValue2 && (
                                <Badge>
                                    <Text> {badgeValue2} </Text>
                                </Badge>
                            )}
                        </Button>
                    )}
                </Right>
            </Header>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    logoImage: {
        height: 60,
        width: width / 3,
    },
})
