import React from 'react';
import { connect } from 'react-redux'

import { View } from 'react-native';
import Menu from './parts/menu.js';
import Canvas from './parts/canvas.js';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    const { step } = this.props;
    return (
      <View>
        { (step == 1) && <Menu /> }
        { (step == 2) && <Canvas /> }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
};

export default connect(mapStateToProps, null)(Main);