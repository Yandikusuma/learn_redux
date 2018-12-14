import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TodoApp from '../TodoApp';


const TodoList = ({ todos, toggleTodo }) => (
	<View>
	 {todos.map(todo => 
		 <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
		   <Text style={{fontSize: 24, textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
		 </TouchableOpacity>
	 )}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default TodoList