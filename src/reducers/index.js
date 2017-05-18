import { combineReducers } from 'redux'
import todos from './todo'
import counter from './counter'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter,
    counter
})
