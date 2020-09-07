import React from 'react';
import { Root } from "native-base";
import {Provider as AuthProvider} from './src/services/context/AuthContext'
import {Provider as UserProvider} from './src/services/context/UserContext'
import {Provider as NewsProvider} from './src/services/context/NewsContext'
import { AppLoading } from 'expo';
import { Container, Text, StyleProvider } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Router from './Router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AuthProvider>
        <UserProvider>
          <NewsProvider>
              <StyleProvider style={getTheme(material)}>
                <Container>
                  <Root>
                    <Router/>
                  </Root>
                </Container>
              </StyleProvider>
          </NewsProvider>
        </UserProvider>
      </AuthProvider>
    );
  }
}
