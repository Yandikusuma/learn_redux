import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'


class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
           <Text style={{fontSize: 18}}>+</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
           <Text style={{fontSize: 18}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
	return{
		counter: state.counter
	}
}

function mapDispatchToProps(dispacth){
	return{
		increaseCounter: () => dispacth({type: 'INCREASE_COUNTER'}),
		decreaseCounter: () => dispacth({type: 'DECREASE_COUNTER'})
		
	}
}

export default connect(mapStateToProps ,mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});