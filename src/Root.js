import React, {Component} from 'react';
import { Navigator } from 'react-native';
import App from './App';
import Artist from './Artist'
import NavigationBar from './NavigationBar'

export default class componentName extends Component {
  renderScene(route, navigator){
    switch (route.id) {
      case 'MAIN':
        return (<App navigator={navigator} />);
      default:
        //'ARTIST_DETAIL'
        return (<Artist url={route.url} />);
    }
  }

  render() {
    return (
       <Navigator style={{flex: 1}} 
          initialRoute={{id: 'MAIN', title: 'Spotify Artist Lookup'}}
          renderScene={this.renderScene}
          navigationBar={NavigationBar}
       />
    );
  }
}
