import React from 'react';
import NativeCanvas from 'react-native-canvas';

export default class Canvas extends React.Component {

  constructor(props){
    super(props);
  }

  handleCanvas(instance){
    const ctx = instance.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
  }

  render(){
    return (
      <NativeCanvas ref={ this.handleCanvas } />
    )
  }
}