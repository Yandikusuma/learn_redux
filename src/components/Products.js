import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class Products extends Component{
	static navigationOptions = {
		headerTitle: 'BallScreen'
	}

	renderProducts = (products) => {
		console.log('hi', products)
		return products.map((item, index) =>{
			return(
				<View key={index} style={{padding: 5}}>
					<TouchableOpacity onPress={() => this.props.onPress(item)}>
					  <Text style={{color: 'green', fontSize: 20, margin: 5}}>{item.name + " " + item.price}</Text>
					</TouchableOpacity>
				</View>
			)
		})
	}
	render(){
		return(
			<View style={styles.container}>
			  {this.renderProducts(this.props.products)}
			</View>
		)
	}
}

export default Products

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})