import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Canvas from './canvas.js';

class MainPage extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={ { color: '#ff0000', marginTop: 50 } }>Hello World!</Text>
        <Canvas />
      </View>
    );
  }
}

export default MainPage;