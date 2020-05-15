import React from 'react';
import { View } from 'react-native';

import Menu from './parts/menu.js';
import Canvas from './parts/canvas.js';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = { step: 1 };
  }

  render() {
    const { step } = this.state;
    return (
      <View>
        { (step == 1) && <Menu /> }
        { (step == 2) && <Canvas /> }
      </View>
    );
  }
}

export default Main;