import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Products from '../components/Products';
import {connect} from 'react-redux';

class CartScreen extends Component{
	render(){
		return(
			<View style={styles.container}>
			{this.props.cartItems.length > 0 ?
				<Products 
				  onPress={this.props.removeItem}
				  products={this.props.cartItems}/> :
				<Text>No List Cart</Text>
			}
			</View>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		cartItems: state
	}
}
const mapDispacthToProps = (dispacth) => {
	return{
		removeItem: (product) => dispacth({type: 'REMOVE_FROM_CART', payload: product})
	}
}

export default connect(mapStateToProps, mapDispacthToProps)(CartScreen);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	}
})