import {
	combineReducers
} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import imgsFilter from './imgsFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	imgsFilter
})

export default todoApp