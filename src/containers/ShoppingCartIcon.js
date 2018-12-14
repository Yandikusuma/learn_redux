import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'


const ShoppingCartIcon = (props) => (
	<View style={{padding: 5}}>
	  <TouchableOpacity onPress={() => props.navigation.navigate('CartList')}>
		  <View style={styles.viewIcon}>
		    <Text style={{color: '#fff', fontWeight: 'bold'}}>{props.cartItems.length}</Text>
		  </View>
		  	<Icon name="ios-cart" size={30} />
		</TouchableOpacity>
	</View>
)

const mapStateToProps = (state) => {
	return{
		cartItems: state
	}
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewIcon:{
		position: 'absolute',
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: 'rgba(95,197,123,0.8)',
		right: 10,
		bottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2000
	}
})