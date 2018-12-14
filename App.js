/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';
import AppState from './src/learn_state/AppState'
import ShoppingCart from './ShoppingCart';



export default class App extends Component {
 
  render() {
    return (
      /*<Provider store={store}>
        <TodoApp />
      </Provider>*/
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    )
  }
}
