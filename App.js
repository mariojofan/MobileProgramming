import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/components/Layout';
import List from './src/components/List';


class App extends Component {
constructor () {
  super();
  this.state = {
    greeting: 'Selamat Datang. Welcome To React Native.....'
  }
}

componentDidMount() {
}
  render() {
    return (
     // <Layout/>
     <List/>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;