import React from 'react';
import { connect } from 'react-redux';
import NativeCanvas from 'react-native-canvas';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { changeStep } from '../store/actions.js';

const styles = {
  panel: {
    height: 70,
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    container: {
      width: "100%"
    },
    base: {
      backgroundColor: '#ff0000',
      paddingTop: 15,
      paddingBottom: 15
    },
    title: {
      color: '#fff',
      fontSize: 18,
      height: "100%",
      fontWeight: 'bold'
    }
  }
};

class Canvas extends React.Component {

  constructor(props){
    super(props);

    this.props = props;
    this.state = { width: this.screenWidth(), height: this.screenHeight() };
  }

  screenWidth(){
    return Dimensions.get('window').width;
  }

  screenHeight(){
    return Dimensions.get('window').height - styles.panel.height;
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
    this.setState({ width: this.screenWidth(), height: this.screenHeight() })
  }

  onDone(){
    this.props.changeStep(1);
  };

  render(){
    const { width, height } = this.state;
    return (
      <View onLayout={ this.onLayout.bind(this) } >
        <NativeCanvas ref={ this.handleCanvas.bind(this) } style={ { width: width, height: height } } />
        <View style={ styles.panel }>
          <Button type="clear" title="Done"
                  titleStyle={ styles.button.title } style={ styles.button.base }
                  containerStyle={ styles.button.container }
                  onPress={ this.onDone.bind(this) }
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStep: (newStep) => dispatch(changeStep(newStep))
  };
};

export default connect(null, mapDispatchToProps)(Canvas);