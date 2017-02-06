import React, { Component } from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
} from 'react-native'
import clrs from '../utils/clrs'

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator) => {
    if(route.id === 'MAIN') {
      return null
    }
    return (
       <TouchableOpacity
          onPress={ () => navigator.pop() }
          style={ styles.navigation }>
          <Text style={[styles.navbarText, styles.navBarLeftButton]}>
            Back
          </Text>
      </TouchableOpacity>
    )
  },

  RightButton: () => {
    return null
  },

  Title: (route) => {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        { route.title }
      </Text>
    )
  },
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: clrs.blue,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: clrs.white,
  },
  navBarTitleText: {
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 9,
    marginLeft: 60,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    marginVertical: 9,
    color: clrs.white,
    fontWeight: '500',
  },
})

export default (
  <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={ NavigationBarRouteMapper } />
)