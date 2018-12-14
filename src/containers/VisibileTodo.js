import { connect } from 'react-redux';
import TodoList from '../components/TodoList';


const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispacthToProps = dispatch => ({
	toggleTodo: id => dispatch({ type: 
	 'TOGLLE_TODO', id})
})

export default connect(mapStateToProps, mapDispacthToProps)(TodoList)