import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddTodo from './containers/AddTodo'
import VisibileTodo from './containers/VisibileTodo'

class TodoApp extends Component {
	state = {
		todos:[],
		visibilityFilte: 'SHOW_ALL_TODOS'
	}
	render () {
		return (
			<View style={styles.container}>
				<AddTodo />
				
				<View>
				 	<VisibileTodo />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 20
	}
})

export default TodoApp