import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class HomeScreen extends Component{

	onPressBall = () => {
		this.props.navigation.navigate('Ball')
	}

	onPressGame = () => {
		this.props.navigation.navigate('Game')
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity 
				  onPress={this.onPressBall}
				>
				  <Text style={{color: 'blue', fontSize: 20, paddingBottom: 20}}>Ball</Text>
				</TouchableOpacity>
				<TouchableOpacity
				  onPress={this.onPressGame}
				>
				   <Text style={{color: 'blue', fontSize: 20}}>Game</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})