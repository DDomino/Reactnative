import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

import Basics from "./Basics";
import Props from "./Props";


//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
import State from "./State";

//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
import Style from "./Style";


//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
import HightWidth from "./HightWidth";


//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
import HightWidthFlex from "./HWFlex";


//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
import FlexBox from "./FlexBox";


//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
import TextInput from "./TextInput";




//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
import Touches from "./Touches";




//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Implemented on button site






//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
import ListView from "./ListView";





//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise
import NetWorking from "./Networking";
import FetchExample from './Networking';




const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise
class WhatToDo extends React.Component {
  static navigationOptions = { title: "What I have to do" }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
        <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
        (inspired of how you navigated into this)
      </Text>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </ScrollView>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Andreas</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('hightwidth')} title="HightWidth" />
        <Touchable onPress={() => navigate('hwflex')} title="HightWidhFlex" />
        <Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
        <Touchable onPress={() => navigate('textinput')} title="TextInput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" />
        <Touchable onPress={() => navigate('listview')} title="ListView" />
        <Touchable onPress={() => navigate('networking')} title="Networking" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State},
  style: { screen: Style},
  hightwidth: { screen: HightWidth},
  hwflex: { screen: HightWidthFlex},
  flexbox: { screen: FlexBox},
  textinput: { screen: TextInput},
  touches: { screen: Touches},
  listview: { screen: ListView},
  networking: { screen: FetchExample},
  web: { screen: WhatToDo },

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})