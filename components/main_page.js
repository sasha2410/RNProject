import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class MainPage extends React.Component {

  render() {
    return (
      <View>
        <Text style={ { color: '#ff0000', marginTop: 100 } }>Hello World!</Text>
      </View>
    );
  }

}

export default MainPage;