import React from 'react';
import NativeCanvas from 'react-native-canvas';
import {
  View,
  Dimensions
} from 'react-native';

export default class Canvas extends React.Component {

  constructor(props){
    super(props);

    this.state = { width: this.screenWidth(), height: this.screenHeight() };
  }

  screenWidth(){
    return Dimensions.get('window').width;
  }

  screenHeight(){
    return Dimensions.get('window').height
  }

  handleCanvas(instance) {
    if (instance){
      const { width, height } = this.state;
      instance.width = width;
      instance.height = height;
      const ctx = instance.getContext('2d');
      ctx.fillStyle = 'purple';
      ctx.fillRect(0, 0, instance.width, instance.height);
    }
  };

  onLayout(){
    console.log(this.screenWidth(), this.screenHeight());
    this.setState({ width: this.screenWidth(), height: this.screenHeight() })
  }

  render(){
    const { width, height } = this.state;
    return (
      <View onLayout={ this.onLayout.bind(this) } >
        <NativeCanvas ref={ this.handleCanvas.bind(this) } style={ { width: width, height: height } } />
      </View>
    )
  }
}