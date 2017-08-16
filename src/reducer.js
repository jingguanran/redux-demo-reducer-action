 import {combineReducers} from 'redux'
 function a(state=[1,2,3],action){
    switch(action.type){
        case 'ADD':
        return [...state,action.item];
        default:
        return state
    }
}
function b(a=0,action){
    switch(action.type){
        case "NUMADD":
        return a+1;
        default:
        return a
    }
}

export default combineReducers({
    a:a,
    b:b
})