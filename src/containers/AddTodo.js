import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from  'react-redux';


class AddTodo extends Component{

	state={
		text: ''
	}

	addTodo = (text) =>  {
		//redux store
		this.props.dispatch({ type: 'ADD_TODO', text })
		this.setState({ text: ''})
	}
	render(){
		return(
			<View style={{flexDirection: 'row', marginHorizontal: 20}}>
				<TextInput 
				  onChangeText={(text)=>this.setState({text})}
				  value={this.state.text}
					placeholder="Search Engine"
					style={{borderWidth: 1, borderColor: '#f2f2e1',
					        backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
				/>
				<TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
					<View style={{height: 50, backgroundColor: '#eaeaea'}}>
						<Image 
							source={require('../../image/plus.jpeg')}
							style={{height: 50, width: 50}}
						/>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default connect()(AddTodo);