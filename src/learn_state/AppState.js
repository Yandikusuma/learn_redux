import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'

export default class AppState extends Component {
	state = {
		count: 0
	}

	increaseCounter = () => {
		this.setState({
			count: this.state.count+1
		})
	}

	decreaseCounter = () => {
		this.setState({
			count: this.state.count-1
		})
	}

	countClear = () => {
		this.setState({
			count: 0
		})
	}

	onChangeText = (number) => {
		const count = parseInt(number);
		this.setState({count})
	}
	render(){
		return(
			<View style={{marginTop: 30}}>
			  <View style={{alignItems: 'center', justifyContent: 'center'}}>
				  <TextInput 
				  	style={{width: 40, height: 40, borderWidth: 1}}
				  	onChangeText={this.onChangeText}
				  	value={this.state.count.toString()}
				  />
				</View>
			  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
			  	<TouchableOpacity onPress={() => this.increaseCounter()}>
			  	  <Text style={{fontSize: 20, padding: 10}}>+</Text>
			  	</TouchableOpacity>
			  	<Text style={{fontSize: 20, padding: 10}}>{this.state.count}</Text>
			  	<TouchableOpacity  onPress={() => this.decreaseCounter()}>
			  	  <Text style={{fontSize: 20, padding: 10}}>-</Text>
			  	</TouchableOpacity>
				</View>
				<View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
				  <TouchableOpacity onPress={() => this.countClear()}>
				    <Text>CLear</Text>
				  </TouchableOpacity>
				</View>
			</View>
		)
	}
}