import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View, 
  Button,
  StyleSheet, 
  TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CalculationClass from '../classes/CalculationClass'


export default class VaporDensity extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams, navigate} = navigation;
    return {
      title: 'Vapor Density',
      headerRight: <Button 
      title="Settings" onPress={()=>navigate('Settings')}/>,
    }
  };

  calcDensity = function(state,updateResult) {
      var pressure = parseFloat(state.cLines[0].SIInput)
      var temperature = parseFloat(state.cLines[1].SIInput)
      var MW=parseFloat(state.cLines[2].SIInput)
      var Z=parseFloat(state.cLines[3].SIInput)

      var rho = pressure*MW/1000/temperature/Z/8.314;

      updateResult(rho)
    }

  constructor(props) {
      super(props);
      this.state = {
        pressure: '',
        temperature: '',
        MW: '',
        Z: '',
        density: 'N/A',
      };

    }




  render(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
            <CalculationClass varLabels={["Press","Temp","MW","Z"]}
                              calcVals={[this.state.pressure,this.state.temperature,this.state.MW,this.state.Z]}
                              unitSets={["P","T","",""]}
                              resultUnitSet={"M/L3"}
                              inputHelperSchemes={["","","",""]}
                              //calcResult={this.state.density}
                              calcFunction = {this.calcDensity.bind(this)}/>
          )
  };
}

const styles = StyleSheet.create({
  hard: {
    color: '#FFFFFF', 
    fontSize: 20
  },
})

AppRegistry.registerComponent('VaporDensity', () => VaporDensity);