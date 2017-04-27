import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text,
  View, 
  ScrollView, 
  StyleSheet, 
  Button,
  TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RouteButton from './components/RouteButton/RouteButton';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.main}>
        <RouteButton title="Density" navigate={this.props.navigation} style={styles.test} />
        <RouteButton title="Vapor Density" navigate={this.props.navigation} />
        <RouteButton title="Reynolds Number" navigate={this.props.navigation} style={{backgroundColor:'purple'}}/>
        <RouteButton title="Pipe Pressure Drop" navigate={this.props.navigation} />
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
        <RouteButton title="Vapor Density" navigate={this.props.navigation} text="Test OverFlow"/>
      </ScrollView>
    )
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#03D6F3',
  },
  test: {
    color: 'green',
    backgroundColor: 'yellow',
  },
})



AppRegistry.registerComponent('Home', () => Home);