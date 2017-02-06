import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ListView, StatusBar, Platform } from 'react-native';
import clrs from '../utils/clrs'
import ListItem from './ListItem'
import { searchFor } from '../utils/fetcher'

export default class App extends Component {
  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const data = ['Spectacles', 'Girafe', 'Turtle', 'Shark', 'Lamp', 'Salt', 
    'Beef', 'Brocolli', 'Rasberries', 'Plate', 'Zebra']

    this.state = {artists: dataSource.cloneWithRows(data)};
  }

  renderRow = (text, sId, rId) => {
    return (
      <ListItem 
      index= { rId }
      text={ text }
      image={ null } />
    );
  };

  render() {
    const { artists } = this.state;
    return (
        <View style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <TextInput style={styles.searchBox}/>

            <ListView 
              dataSource={ artists }
              style={{flex: 1, alignSelf: "stretch"}}
              renderRow={ this.renderRow } />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  searchBox: {
    height: 40,
    borderColor: clrs.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
    alignSelf: 'stretch'
  },
  row: {
    margin: 20,
  }
});
