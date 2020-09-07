import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import HomeScreen from '../screens/homepage/HomeScreen';
import ProfileScreen from '../screens/profil/ProfileScreen';

console.disableYellowBox = true;
const IndexScreen = ({navigation}) => {
    const [screen, setScreen] = useState(3)

    return (
        <View style={styles.container}>
            <Container >
                {
                    screen === 1?
                        <ProfileScreen navigation={navigation}/>:
                    screen === 2?
                        <HomeScreen navigation={navigation}/>:
                    screen === 3?
                        <HomeScreen navigation={navigation}/>:
                    screen === 4?
                        <HomeScreen navigation={navigation}/>:
                    <HomeScreen navigation={navigation}/>
                }
            </Container>
            <Footer>
                <FooterTab>
                    <Button active={screen==1?true:false} vertical onPress={() => setScreen(1)}>
                        <Icon name="ios-person" />
                        <Text>Profile</Text>
                    </Button>
                    <Button active={screen==3?true:false} vertical onPress={() => setScreen(3)}>
                        <Icon name="ios-home" />
                        <Text>Home</Text>
                    </Button>
                    <Button active={screen==5?true:false} vertical onPress={() => navigation.navigate('Search')}>
                        <Icon name="ios-search" />
                        <Text>Search News</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})
