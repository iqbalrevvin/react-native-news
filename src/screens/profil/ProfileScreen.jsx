import React, { useContext, useEffect } from 'react'
import {AsyncStorage, StyleSheet } from 'react-native'
import { Context as UserContext } from '../../services/context/UserContext'
import { Container, Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import firebase from '../../services/firebase/firebase'

const ProfileScreen = ({navigation}) => {
    const { state, UserLogin } = useContext(UserContext)

    useEffect(() => {
        UserLogin()
        return () => {
            null
        };
    }, []);

    const handleLogout = () => {
        firebase.auth().signOut()
        AsyncStorage.removeItem('login')
        navigation.replace('ResolveAuth')
    }

    const ListInformation = () => (
        <Grid>
            {/* <Text>{JSON.stringify(state.userProfile)}</Text> */}
            <Row style={{ backgroundColor: 'transparent', }}>
                <Col style={{ height: 500 }}>
                    <ListItem itemDivider>
                        <Text>Profile Information</Text>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="ios-person" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>UID</Text>
                        </Body>
                        <Right>
                            <Text style={{fontSize:15}}>{state.userProfile.uid}</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="ios-person" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Name</Text>
                        </Body>
                        <Right>
                            <Text>{state.userProfile.displayName}</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="ios-mail" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Email</Text>
                        </Body>
                        <Right>
                            <Text>{state.userProfile.email}</Text>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Akun</Text>
                    </ListItem>

                    <ListItem icon onPress={handleLogout}>
                        <Left>
                            <Button style={{ backgroundColor: "#ed1342" }} >
                                <Icon active name="ios-log-out" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Logout Akun</Text>
                        </Body>
                    </ListItem>
                </Col>
            </Row>
        </Grid>  
    )

    return (
        <Container>
            {ListInformation()}
        </Container>
    )
}

export default ProfileScreen


