import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ball} from '../../Data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class BallScreen extends Component{
	static navigationOptions = {
		headerTitle: 'BallScreen'
	}
	render(){
		return(
			<View style={styles.container}>
			  <Products products={ball} onPress={this.props.addItemToCart}/>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addItemToCart:(products) => dispatch({type: 'ADD_TO_CART', payload:products})
	}
}

export default connect(null, mapDispatchToProps)(BallScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})