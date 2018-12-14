import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './src/containers/HomeScreen';
import BallScreen from './src/containers/BallScreen';
import GameScreen from './src/containers/GameScreen';
import ShoppingCartIcon from './src/containers/ShoppingCartIcon';
import CartScreen from './src/containers/CartScreen';



class ShoppingCart extends Component {
	render(){
		return(
			<AppStackNavigator />
		)
	}
}

const AppStackNavigator = createStackNavigator({
	Home: HomeScreen,
	Ball: BallScreen,
	Game: GameScreen,
	CartList: CartScreen,
},{
	navigationOptions: {
		headerTitle: 'Shopping App',
		headerRight: (
			  <ShoppingCartIcon/>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})



export default ShoppingCart