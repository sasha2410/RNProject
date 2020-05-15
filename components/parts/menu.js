import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

const styles = {

  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 25
  },
  button: {
    base: {
      backgroundColor: '#ff0000',
      marginBottom: 10,
      width: 250
    },
    title: {
      color: '#fff',
      fontSize: 14
    }
  }
};

class Menu extends React.Component {

  constructor(props){
    super(props);
  }

  onStart(event){
    console.log('start clicked');
    console.log(event);
  }

  onOptions(event){
    console.log('options clicked');
    console.log(event);
  }

  render() {
    return (
      <ImageBackground style={ styles.container } source={ require('../images/image-1.jpg') }>
        <Text style={ styles.text }>Welcome to the app!</Text>
        <Button type="clear" titleStyle={ styles.button.title } style={ styles.button.base } title="Start New Game" onPress={ this.onStart.bind(this) }
                icon={
                      <Icon
                        name="airplay"
                        size={15}
                        color="white"
                        style={{ marginRight: 10 }}
                      />
                    }
        />
        <Button type="clear" titleStyle={ styles.button.title } style={ styles.button.base } title="Options" onPress={ this.onOptions.bind(this) }/>
      </ImageBackground>
    );
  }
}

export default Menu;